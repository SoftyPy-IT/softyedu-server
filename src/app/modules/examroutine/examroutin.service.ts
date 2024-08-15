/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import httpStatus from 'http-status';
import { TExamRoutin } from './examroutin.interface';
import { ExamRoutin } from './examroutin.model';
import { examRoutinSearchabelField } from './examroutin.constant';

const createExamRoutin = async (payload: TExamRoutin) => {
  const result = await ExamRoutin.create(payload);
  return result;
};

const getAllExamRoutin = async (query: Record<string, unknown>) => {
  const homeworkQuery = new QueryBuilder(ExamRoutin.find(), query)
    .search(examRoutinSearchabelField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await homeworkQuery.countTotal();
  const examroutins = await homeworkQuery.modelQuery;

  return {
    meta,
    examroutins,
  };
};
const getSinigleExamRoutin = async (id: string) => {
  const result = await ExamRoutin.findById(id);
  return result;
};
const updateExamRoutin = async (id: string, payload: Partial<TExamRoutin>) => {
  const { ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  const result = await ExamRoutin.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteExamRoutin = async (id: string): Promise<TExamRoutin | null> => {
  const result = await ExamRoutin.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  if (!result) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Examroutin not found or already deleted',
    );
  }

  return result;
};

export const ExamRoutinServices = {
  createExamRoutin,
  getAllExamRoutin,
  getSinigleExamRoutin,
  updateExamRoutin,
  deleteExamRoutin,
};
