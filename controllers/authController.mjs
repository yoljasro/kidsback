import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.mjs";

// Ro‘yxatdan o‘tish
export const register = async (req, res) => {
    try {
        const { fullname, phone, password } = req.body;

        // Telefon raqamini tekshiramiz
        const existingUser = await User.findOne({ phone });
        if (existingUser) {
            return res.status(400).json({ message: "Bu telefon raqami allaqachon ro‘yxatdan o‘tgan!" });
        }

        // Parolni shifrlaymiz
        const hashedPassword = await bcrypt.hash(password, 10);

        // Yangi user yaratamiz
        const newUser = new User({
            fullname,
            phone,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: "Foydalanuvchi muvaffaqiyatli ro‘yxatdan o‘tdi!" });
    } catch (error) {
        res.status(500).json({ message: "Server xatosi", error });
    }
};

// Login qilish
export const login = async (req, res) => {
    try {
        const { phone, password } = req.body;

        // Userni topamiz
        const user = await User.findOne({ phone });
        if (!user) {
            return res.status(400).json({ message: "Telefon raqami yoki parol noto‘g‘ri!" });
        }

        // Parolni tekshiramiz
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Telefon raqami yoki parol noto‘g‘ri!" });
        }

        // Token yaratamiz
        const token = jwt.sign({ id: user._id }, "secretKey", { expiresIn: "30d" });

        res.status(200).json({ token, user });
    } catch (error) {
        res.status(500).json({ message: "Server xatosi", error });
    }
};
