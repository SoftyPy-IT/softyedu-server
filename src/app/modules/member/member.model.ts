import { Schema, model } from 'mongoose';
import { TMember } from './member.interface';

const MemberSchema = new Schema<TMember>({
  nid: {
    type: String,
    required: [true, 'National ID is required'],
  },
  card_no: {
    type: String,
    required: [true, 'Library Card Number is required'],
  },
  admission_no: {
    type: String,
    required: [true, 'Admission Number is required'],
  },
  name: {
    type: String,
    required: [true, 'Member name is required'],
  },
  class: {
    type: String,
    required: [true, 'Class is required'],
  },
  group: {
    type: String,
    required: [true, 'Group is required'],
  },
  member_type: {
    type: String,
    required: [true, 'Member type is required'],
  },
  gender: {
    type: String,
    required: [true, 'Gender is required'],
  },
  roll: {
    type: String,
    required: [true, 'Roll number is required'],
  },
  dof: {
    type: String,
    required: [true, 'Date of birth is required'],
  },
  father_name: {
    type: String,
    required: [true, 'Father\'s name is required'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
});

export const Member = model<TMember>('Member', MemberSchema);
