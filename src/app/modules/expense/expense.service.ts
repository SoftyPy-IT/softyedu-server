/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import httpStatus from 'http-status';
import { TExpense } from './expense.interface';
import { Expense } from './expense.model';
import { expenseSearchabelField } from './expense.constant';

const addExpense = async (payload: TExpense) => {
  const result = await Expense.create(payload);
  return result;
};

const getAllExpense = async (query: Record<string, unknown>) => {
  const salaryQuery = new QueryBuilder(Expense.find(), query)
    .search(expenseSearchabelField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await salaryQuery.countTotal();
  const expenses = await salaryQuery.modelQuery;

  return {
    meta,
    expenses,
  };
};
const getSinigleExpense = async (id: string) => {
  const result = await Expense.findById(id);
  return result;
};
const updateExpense = async (id: string, payload: Partial<TExpense>) => {
  const { ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  const result = await Expense.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteExpense = async (id: string) => {
  const result = await Expense.deleteOne({ _id:id });
  return result;
};

export const ExpenseServices = {
  addExpense,
  getAllExpense,
  getSinigleExpense,
  updateExpense,
  deleteExpense,
};
