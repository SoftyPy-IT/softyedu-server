import { Schema, model } from 'mongoose';
import { TIncome } from './income.interface';

const IncomeSchema = new Schema<TIncome>({
  category: {
    type: [String],
    required: [true, 'Income category is required'],
  },
  income: {
    type: String,
    required: [true, 'Income name is required'],
  },
  invoice: {
    type: Number,
    required: [true, 'Invoice number is required'],
  },
  date: {
    type: Date,
    required: [true, 'Income date is required'],
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
  },
  image: {
    type: String,
    required: [true, 'Invoice image is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
});

export const Income = model<TIncome>('Income', IncomeSchema);
