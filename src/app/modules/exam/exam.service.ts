/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import httpStatus from 'http-status';
import { TExam } from './exam.interface';
import { Exam } from './exam.model';
import { examSearchabelField } from './exam.constant';


const createExam = async (payload: TExam) => {
  const result = await Exam.create(payload);
  return result;
};

const getAllExam = async (query: Record<string, unknown>) => {
  const homeworkQuery = new QueryBuilder(Exam.find(), query)
    .search(examSearchabelField)
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
const getSinigleExam = async (id: string) => {
  const result = await Exam.findById(id);
  return result;
};
const updateExam = async (id: string, payload: Partial<TExam>) => {
  const { ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  const result = await Exam.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteExam = async (id: string): Promise<TExam | null> => {

  const result = await Exam.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  if (!result) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Exam not found or already deleted',
    );
  }

  return result;
};

export const ExamServices = {
  createExam,
  getAllExam,
  getSinigleExam,
  updateExam,
  deleteExam,
};
