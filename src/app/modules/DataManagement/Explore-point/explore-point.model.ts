import mongoose, { Model, Schema } from 'mongoose';
import { TExplorePoint } from './explore-point.interface';

const ExplorePointSchema: Schema<TExplorePoint> = new Schema<TExplorePoint>(
  {
    title: { type: String, required: [true, 'Title is required.'] },
    description: { type: String, required: [true, 'Description is required.'] },
    image: [
      {
        type: String,
        required: [true, 'Image is required.'],
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const ExplorePoint: Model<TExplorePoint> = mongoose.model<TExplorePoint>(
  'ExplorePoint',
  ExplorePointSchema,
);
