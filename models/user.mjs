import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 6,
        select: false,
      },
      phone: {
        type: String, // 🔁 unique: true ni olib tashlandi
        default: null,
      },
    },
    { timestamps: true }
  );
  

export default mongoose.model('User', userSchema);
