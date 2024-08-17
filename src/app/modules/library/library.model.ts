import { Schema, model } from 'mongoose';
import { TLibrary } from './library.interface';

const LibrarySchema = new Schema<TLibrary>({
  title: {
    type: String,
    required: [true, 'Book title is required'],
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
  },
  department: {
    type: String,
    required: [true, 'Department is required'],
  },
  type: {
    type: String,
    required: [true, 'Type of the book is required'],
  },
  status: {
    type: String,
    required: [true, 'Status is required'],
  },
});

export const Library = model<TLibrary>('Library', LibrarySchema);
