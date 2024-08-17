import { Schema, model } from 'mongoose';
import { TExpense } from './expense.interface';

const ExpenseSchema = new Schema<TExpense>({
  name: {
    type: String,
    required: [true, 'Expense name is required'],
  },
  expense_by: {
    type: String,
    required: [true, 'The person or entity who made the expense is required'],
  },
  amount: {
    type: Number,
    required: [true, 'Expense amount is required'],
  },
  date: {
    type: Date,
    required: [true, 'Expense date is required'],
  },
});

export const Expense = model<TExpense>('Expense', ExpenseSchema);
