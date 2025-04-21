import User from '../models/user.mjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const JWT_EXPIRES_IN = '2d'; 

// Register
export const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword)
    return res.status(400).json({ message: 'Barcha maydonlar to‘ldirilishi kerak' });

  if (password !== confirmPassword)
    return res.status(400).json({ message: 'Parollar mos emas' });

  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res.status(400).json({ message: 'Email allaqachon ro‘yxatdan o‘tgan' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();

  res.status(201).json({ message: 'Foydalanuvchi muvaffaqiyatli ro‘yxatdan o‘tdi' });
};

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: 'Email va parol kiritilishi kerak' });

  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({ message: 'Bunday foydalanuvchi mavjud emas' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({ message: 'Parol noto‘g‘ri' });

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

  res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
};
