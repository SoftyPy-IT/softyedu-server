/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import httpStatus from 'http-status';
import { TIncome } from './income.interface';
import { Income } from './income.model';
import { incomeSearchabelField } from './income.constant';


const addIncome = async (payload: TIncome) => {
  const result = await Income.create(payload);
  return result;
};

const getAllIncome = async (query: Record<string, unknown>) => {
  const salaryQuery = new QueryBuilder(Income.find(), query)
    .search(incomeSearchabelField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await salaryQuery.countTotal();
  const salaries = await salaryQuery.modelQuery;

  return {
    meta,
    salaries,
  };
};
const getSinigleIncome = async (id: string) => {
  const result = await Income.findById(id);
  return result;
};
const updateIncome = async (id: string, payload: Partial<TIncome>) => {
  const { ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  const result = await Income.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteIncome = async (id: string): Promise<TIncome | null> => {

  const result = await Income.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  if (!result) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Income not found or already deleted',
    );
  }

  return result;
};

export const IncomeServices = {
  addIncome,
  getAllIncome,
  getSinigleIncome,
  updateIncome,
  deleteIncome,
};
