/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import httpStatus from 'http-status';
import { GradeMarkModel } from './grademarks.model';
import { TGradeMark } from './grademarks.interface';
import { grademarkSearchableField } from './grademarks.constant';


const createGrademark = async (payload: TGradeMark) => {
  const result = await GradeMarkModel.create(payload);
  return result;
};

const getAllGrademark = async (query: Record<string, unknown>) => {
  const marksheetQuery = new QueryBuilder(GradeMarkModel.find(), query)
    .search(grademarkSearchableField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await marksheetQuery.countTotal();
  const results = await marksheetQuery.modelQuery;

  return {
    meta,
    results,
  };
};
const getSinigleGrademark = async (id: string) => {
  const result = await GradeMarkModel.findById(id);
  return result;
};
const updateGrademark = async (id: string, payload: Partial<TGradeMark>) => {
  const result = await GradeMarkModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteGrademark = async (id: string): Promise<TGradeMark | null> => {
  const result = await GradeMarkModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  if (!result) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Grademark not found or already deleted',
    );
  }

  return result;
};

export const GrademarkServices = {
  createGrademark,
  getAllGrademark,
  getSinigleGrademark,
  updateGrademark,
  deleteGrademark,
};
