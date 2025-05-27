import User from '../models/user.mjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const JWT_EXPIRES_IN = '2d';

// ============ REGISTER =============
export const register = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Ism, email va parol to‘ldirilishi shart' });
    }

    // Agar confirmPassword berilgan bo‘lsa, uni tekshiramiz
    if (confirmPassword && password !== confirmPassword) {
      return res.status(400).json({ message: 'Parollar mos emas' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Bu email bilan foydalanuvchi allaqachon mavjud' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Ro‘yxatdan muvaffaqiyatli o‘tildi' });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
  }
};

// ============== LOGIN ==============
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email va parol kiritilishi kerak' });
    }

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(400).json({ message: 'Foydalanuvchi topilmadi' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Parol noto‘g‘ri' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
  }
};
