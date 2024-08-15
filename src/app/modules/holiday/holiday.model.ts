
import { Schema, model } from 'mongoose';
import { THolidy } from './holiday.interface';

const HolidaySchema = new Schema<THolidy>({
  title: {
    type: String,
    required: [true, 'Holiday title is required'],
  },
  holiday_type: {
    type: String,
    required: [true, 'Holiday type is required'],
  },
  start_date: {
    type: String,
    required: [true, 'Start date is required'],
  },
  end_date: {
    type: String,
    required: [true, 'End date is required'],
  },
  isDeleted: {
    type: Boolean,
    default:false
  },
});

export const Holiday = model<THolidy>('Holiday', HolidaySchema);
