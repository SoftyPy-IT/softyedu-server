import mongoose, { Model, Schema } from 'mongoose';
import { TBanner } from './banner.interface';

const BannerSchema: Schema<TBanner> = new Schema<TBanner>(
  {
    image: {
      type: String,
      required: [true, 'Image is required.'],
    },
    title: { type: String, required: [true, 'Title is required.'] },
    description: { type: String, required: [true, 'Description is required.'] },

  },
  {
    timestamps: true,
  },
);

export const Banner: Model<TBanner> = mongoose.model<TBanner>(
  'Banner',
  BannerSchema,
);
