import { Schema, model } from 'mongoose';
import { TGmeet } from './gmeet.interface';

const GmeetSchema = new Schema<TGmeet>({
  class: {
    type: Number,
    enum: [5, 6, 7, 8, 9, 10],
    required: [true, 'Class is required'],
  },
  description: {
    type: String,
    required: false,
  },
  subject: {
    type: String,
    required: true,
    enum: ['Bangla', 'English', 'Math'],
  },
  shift: {
    type: String,
    enum: ['Morning', 'Evening'],
    required: [true, 'Shift is required'],
  },
  section: {
    type: String,
    enum: ['A', 'B', 'C'],
    required: [true, 'Section is required'],
  },

  date: {
    type: Date,
    required: true,
  },
  start_time: {
    type: Date,
    required: true,
  },
  end_time: {
    type: Date,
    required: true,
  },
  class_duration: {
    type: String,
    required: false,
  },
  created_by: {
    type: String,
    required: false,
  },
  created_for: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: true,
    enum: ['Awaited', 'Canceled', 'Finished'],
  },
  gmeet_link: {
    type: String,
    required: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const GmeetModel = model<TGmeet>('Gmeet', GmeetSchema);

export default GmeetModel;
