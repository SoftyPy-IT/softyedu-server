/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import httpStatus from 'http-status';
import { Homework } from './homework.model';
import { THomework } from './homework.interface';
import { homeworkSearchabelField } from './homework.constant';

const createHomework = async (payload: THomework) => {
  const result = await Homework.create(payload);
  return result;
};

const getAllHomework = async (query: Record<string, unknown>) => {
  const homeworkQuery = new QueryBuilder(Homework.find(), query)
    .search(homeworkSearchabelField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await homeworkQuery.countTotal();
  const admissions = await homeworkQuery.modelQuery;

  return {
    meta,
    admissions,
  };
};
const getSinigleHomework = async (id: string) => {
  const result = await Homework.findById(id);
  return result;
};
const updateHomework = async (id: string, payload: Partial<THomework>) => {
  const { ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  const result = await Homework.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteHomework = async (id: string): Promise<THomework | null> => {

  const result = await Homework.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  if (!result) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Homework not found or already deleted',
    );
  }

  return result;
};

export const HomeworkServices = {
  createHomework,
  getAllHomework,
  getSinigleHomework,
  updateHomework,
  deleteHomework,
};
