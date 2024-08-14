/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import httpStatus from 'http-status';

import { ResultModel } from './result.model';
import { resultSearchableField } from './result.constant';
import { TResult } from './result.interface';

const createResult = async (payload: TResult) => {
  const result = await ResultModel.create(payload);
  return result;
};

const getAllResult = async (query: Record<string, unknown>) => {
  const resultQuery = new QueryBuilder(ResultModel.find(), query)
    .search(resultSearchableField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await resultQuery.countTotal();
  const results = await resultQuery.modelQuery;

  return {
    meta,
    results,
  };
};
const getSinigleResult = async (id: string) => {
  const result = await ResultModel.findById(id);
  return result;
};
const updateResult = async (id: string, payload: Partial<TResult>) => {
  const result = await ResultModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteResult = async (id: string): Promise<TResult | null> => {
  console.log('Deleting Admission with id:', id);

  const result = await ResultModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  if (!result) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Admission not found or already deleted',
    );
  }

  return result;
};

export const ResultServices = {
  createResult,
  getAllResult,
  getSinigleResult,
  updateResult,
  deleteResult,
};
