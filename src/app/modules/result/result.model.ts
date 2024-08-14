import { Schema, model } from 'mongoose';

export interface TResult {
  roll: number;
  name: string;
  class: string;
  group: string;
  semester: string;
  gpa: string;
}

const ResultSchema = new Schema<TResult>({
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
  gpa: {
    type: String,
    required: [true, 'GPA is required'],
  },
});

export const ResultModel = model<TResult>('Result', ResultSchema);

