import mongoose, { Model, Schema } from 'mongoose';
import { TSchoolFeatures, TFeatures } from './school-features.interface';

// Define the TFeatures schema
const FeaturesSchema: Schema<TFeatures> = new Schema<TFeatures>(
  {
    title: { type: String, required: [true, 'Feature title is required.'] },
    description: { type: String, required: [true, 'Feature description is required.'] },
    
    image: { type: String, required: [true, 'Feature image is required.'] },
  },
  { _id: false } // _id is not required for this nested schema
);

// Define the main SchoolFeatures schema
const SchoolFeaturesSchema: Schema<TSchoolFeatures> = new Schema<TSchoolFeatures>(
  {
    title: { type: String, required: [true, 'Title is required.'] },
    description: { type: String, required: [true, 'Description is required.'] },
    
    features: {
      type: [FeaturesSchema], // Array of TFeatures
      required: [true, 'Features are required.'],
      validate: {
        validator: function (value: TFeatures[]) {
          // Ensure features array is not empty
          return value && value.length > 0;
        },
        message: 'At least one feature must be provided.',
      },
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Create and export the model
export const SchoolFeatures: Model<TSchoolFeatures> = mongoose.model<TSchoolFeatures>(
  'SchoolFeatures',
  SchoolFeaturesSchema
);
