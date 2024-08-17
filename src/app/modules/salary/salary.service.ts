/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import httpStatus from 'http-status';
import { TSalary } from './salary.interface';
import { Salary } from './salary.model';
import { salarySearchabelField } from './salary.constant';


const addSalary = async (payload: TSalary) => {
  const result = await Salary.create(payload);
  return result;
};

const getAllSalary = async (query: Record<string, unknown>) => {
  const salaryQuery = new QueryBuilder(Salary.find(), query)
    .search(salarySearchabelField)
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
const getSinigleSalary = async (id: string) => {
  const result = await Salary.findById(id);
  return result;
};
const updateSalary = async (id: string, payload: Partial<TSalary>) => {
  const { ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  const result = await Salary.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteSalary = async (id: string): Promise<TSalary | null> => {

  const result = await Salary.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  if (!result) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Salary not found or already deleted',
    );
  }

  return result;
};

export const SalaryServices = {
  addSalary,
  getAllSalary,
  getSinigleSalary,
  updateSalary,
  deleteSalary,
};
