import Profile from "../models/profile.mjs";

// 🟢 Profilni olish
export const getProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const profile = await Profile.findOne({ userId });

    if (!profile) return res.status(404).json({ message: "Profil topilmadi" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err });
  }
};

// 🟡 Profilni yaratish yoki yangilash
export const updateProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = req.body;

    const profile = await Profile.findOneAndUpdate({ userId }, data, {
      new: true,
      upsert: true,
    });

    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err });
  }
};

// 🟣 Profil sozlamalarini alohida yangilash
export const updateSettings = async (req, res) => {
  try {
    const { userId } = req.params;
    const { sound, vibration, language } = req.body;

    const profile = await Profile.findOneAndUpdate(
      { userId },
      { "settings.sound": sound, "settings.vibration": vibration, "settings.language": language },
      { new: true }
    );

    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err });
  }
};
