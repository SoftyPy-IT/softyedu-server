import { Schema, model } from 'mongoose';
import { TMarksheet } from './marksheet.interface';

const markSheetSchema = new Schema<TMarksheet>({
  roll: {
    type: Number,
    required: [true, 'Roll is required'],
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  class: {
    type: String,
    required: [true, 'Class is required'],
  },
  group: {
    type: String,
    required: [true, 'Group is required'],
  },
  semester: {
    type: String,
    required: [true, 'Semester is required'],
  },
  session: {
    type: String,
    required: [true, 'Session is required'],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const Marksheet = model<TMarksheet>('Marksheet', markSheetSchema);
