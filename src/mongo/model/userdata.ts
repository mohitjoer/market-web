import { Schema, model, Document, models } from 'mongoose';


interface IUserData extends Document {
  user: {
    userId: string;
    userImage: string;
    firstName: string;
    lastName?: string;
  };
  createdspots: Array<{
    spotId: string;
  }>;
  wishlist: Array<{
    spotId: string;
  }>;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUserData>(
  {
    user: {
      userId: { type: String, required: true },
      userImage: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String },
    },
    createdspots: [{
      spotId: { type: String },
    }],
  },
  {
    timestamps: true,
  }
);

const UserData = models.UserData || model<IUserData>('UserData', userSchema);

export default UserData;