import mongoose, { Model, Schema } from 'mongoose';
import { TAchievement } from './achievement.interface';

const AchievementSchema: Schema<TAchievement> = new Schema<TAchievement>(
  {
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
  },
  {
    timestamps: true,
  },
);

const Achievement: Model<TAchievement> = mongoose.model<TAchievement>(
  'Achievement',
  AchievementSchema,
);
export default Achievement;
