


import { Schema, model } from 'mongoose';
import { TAssignment } from './assignment.interface';


const AssignmentSchema = new Schema<TAssignment>({
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
  image:{
    type: String,
    required:[true, 'Image is required']
  }
});

export const Assignment = model<TAssignment>('Assignment', AssignmentSchema);
