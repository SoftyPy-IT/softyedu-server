/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import httpStatus from 'http-status';
import GmeetModel from './gmeet.model';
import { TGmeet } from './gmeet.interface';
import { gmeetSearchabelField } from './gmeet.constant';

const createGmeet = async (payload: TGmeet) => {
  const result = await GmeetModel.create(payload);
  return result;
};

const getAllGmeet = async (query: Record<string, unknown>) => {
  const studentQuery = new QueryBuilder(GmeetModel.find(), query)
    .search(gmeetSearchabelField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await studentQuery.countTotal();
  const admissions = await studentQuery.modelQuery;

  return {
    meta,
    admissions,
  };
};
const getSinigleGmeet = async (id: string) => {
  const result = await GmeetModel.findById(id);
  return result;
};
const updateGmeet = async (id: string, payload: Partial<TGmeet>) => {
  const { ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  const result = await GmeetModel.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteGmeet = async (id: string): Promise<TGmeet | null> => {
  console.log('Deleting Admission with id:', id);

  const result = await GmeetModel.findByIdAndUpdate(
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

export const GmeetServices = {
  createGmeet,
  getAllGmeet,
  getSinigleGmeet,
  updateGmeet,
  deleteGmeet,
};
