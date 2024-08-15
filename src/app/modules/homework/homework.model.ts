
import { Schema, model } from 'mongoose';
import { THomework } from './homework.interface';


const HomeworkSchema = new Schema<THomework>({
  class: {
    type: String,
    required: [true, 'Class is required'],
  },
  section: {
    type: String,
    required: [true, 'Section is required'],
  },
  group: {
    type: String,
    required: [true, 'Group is required'],
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  isDeleted: {
    type: Boolean,
    default:false
  },
});

export const Homework = model<THomework>('Homework', HomeworkSchema);
