
import { Schema, model } from 'mongoose';
import { TExamRoutin } from './examroutin.interface';

const ExamRoutinSchema = new Schema<TExamRoutin>({
  name: {
    type: String,
    required: [true, 'Exam name is required'],
  },
  class: {
    type: String,
    required: [true, 'Class is required'],
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
  },
  day: {
    type: String,
    required: [true, 'Day is required'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
  time: {
    type: Date,
    required: [true, 'Time is required'],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const ExamRoutin = model<TExamRoutin>('ExamRoutin', ExamRoutinSchema);
