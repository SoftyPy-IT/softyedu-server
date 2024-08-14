/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import httpStatus from 'http-status';
import { Marksheet } from './marksheet.model';
import { TMarksheet } from './marksheet.interface';
import { markSheetSearchableField } from './marksheet.constant';

const createMarksheet = async (payload: TMarksheet) => {
  const result = await Marksheet.create(payload);
  return result;
};

const getAllMarksheet = async (query: Record<string, unknown>) => {
  const marksheetQuery = new QueryBuilder(Marksheet.find(), query)
    .search(markSheetSearchableField)
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
const getSinigleMarksheet = async (id: string) => {
  const result = await Marksheet.findById(id);
  return result;
};
const updateMarksheet = async (id: string, payload: Partial<TMarksheet>) => {
  const result = await Marksheet.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteMarksheet = async (id: string): Promise<TMarksheet | null> => {
  const result = await Marksheet.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  if (!result) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Marksheet not found or already deleted',
    );
  }

  return result;
};

export const MarksheetServices = {
  createMarksheet,
  getAllMarksheet,
  getSinigleMarksheet,
  updateMarksheet,
  deleteMarksheet,
};
