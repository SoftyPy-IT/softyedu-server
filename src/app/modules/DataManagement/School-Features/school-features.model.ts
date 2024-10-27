import mongoose, { Model, Schema } from 'mongoose';
import { TSchoolFeatures } from './school-features.interface';

const SchoolFeaturesSchema: Schema<TSchoolFeatures> =
  new Schema<TSchoolFeatures>(
    {
      title: { type: String, required: [true, 'Title is required.'] },
      description: {
        type: String,
        required: [true, 'Description is required.'],
      },
      sub_title: { type: String, required: [true, 'Sub title is required.'] },
      sub_description: {
        type: String,
        required: [true, 'Sub title description is required.'],
      },
      image: { type: String, required: [true, 'Image is required.'] },
    },
    {
      timestamps: true,
    },
  );

export const SchoolFeatures: Model<TSchoolFeatures> =
  mongoose.model<TSchoolFeatures>('SchoolFeatures', SchoolFeaturesSchema);
