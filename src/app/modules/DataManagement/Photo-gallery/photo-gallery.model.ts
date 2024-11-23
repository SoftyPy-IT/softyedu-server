import mongoose, { Model, Schema } from 'mongoose';
import { TPhotoGallery } from './photo-gallery.interface';
 

// Define the main SchoolFeatures schema
const photoGallerySchema: Schema<TPhotoGallery> = new Schema<TPhotoGallery>(
  {
    name: { type: String, required: [true, 'Image name is required.'] },
    image: { type: String, required: [true, 'Feature image is required.'] }, 
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Create and export the model
export const PhotoGallery: Model<TPhotoGallery> = mongoose.model<TPhotoGallery>(
  'PhotoGallery',
  photoGallerySchema
);
