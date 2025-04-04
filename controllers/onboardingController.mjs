import Onboarding from "../models/onboarding.mjs";

// 📌 Foydalanuvchining onboarding holatini olish
export const getOnboarding = async (req, res) => {
  try {
    const { userId } = req.params;
    const onboarding = await Onboarding.findOne({ userId });

    if (!onboarding) {
      return res.status(404).json({ message: "Onboarding ma'lumotlari topilmadi" });
    }

    res.json(onboarding);
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error });
  }
};

// 📌 Yangi onboarding ma’lumotlarini yaratish yoki yangilash
export const updateOnboarding = async (req, res) => {
  try {
    const { userId } = req.params;
    const updateData = req.body;

    const onboarding = await Onboarding.findOneAndUpdate({ userId }, updateData, {
      new: true,
      upsert: true, // Agar mavjud bo‘lmasa, yaratadi
    });

    res.json(onboarding);
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error });
  }
};

// 📌 Onboardingni tugatish
export const completeOnboarding = async (req, res) => {
  try {
    const { userId } = req.params;

    const onboarding = await Onboarding.findOneAndUpdate(
      { userId },
      { step: 8 }, // 8-bosqichda tugaydi deb hisoblaymiz
      { new: true }
    );

    res.json({ message: "Onboarding tugatildi", onboarding });
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error });
  }
};
