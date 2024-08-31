import mongoose, { Document, Model, Schema } from 'mongoose';

interface IUser extends Document {
  clerkId: string;
  name?: string;
  grade?: number;
}

const userSchema = new Schema<IUser>({
  clerkId: { type: String, required: true, unique: true },
  name: { type: String },
  grade: { type: Number },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
