/* eslint-disable @typescript-eslint/no-unused-vars */
import { Schema, model } from 'mongoose';
import { ISalary } from './salary.interface';
import { TMonths } from '../student/student.constant';

const SalarySchema = new Schema<ISalary>({
  id: {
    type: String,
    required: [true, 'ID is required'],
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  type: {
    type: String,
    required: [true, 'Employee type is required'],
  },
  salary: {
    type: String,
    required: [true, 'Salary is required'],
  },
  bonus: {
    type: String,
    required: [true, 'Bonus is required'],
  },
  total: {
    type: String,
    required: [true, 'Total is required'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
//   month: {
//     type: String,
//     enum: TMonths,
//     required: [true, 'Month is required'],
//   },
  status: {
    type: [String],
    enum: ['complet', 'pending', 'on-hold', 'cancell'], // List all possible statuses
    required: [true, 'Status is required'],
  },
});

export const Salary = model<ISalary>('Salary', SalarySchema);
