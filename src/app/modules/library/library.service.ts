/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import httpStatus from 'http-status';
import { TLibrary } from './library.interface';
import { Library } from './library.model';
import { librarySearchabelField } from './library.constant';

const addLibrary = async (payload: TLibrary) => {
  const result = await Library.create(payload);
  return result;
};

const getAllLibrary = async (query: Record<string, unknown>) => {
  const salaryQuery = new QueryBuilder(Library.find(), query)
    .search(librarySearchabelField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await salaryQuery.countTotal();
  const libraries = await salaryQuery.modelQuery;

  return {
    meta,
    libraries,
  };
};
const getSinigleLibrary = async (id: string) => {
  const result = await Library.findById(id);
  return result;
};
const updateLibrary = async (id: string, payload: Partial<TLibrary>) => {
  const { ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  const result = await Library.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteLibrary = async (id: string) => {
  const result = await Library.deleteOne({ _id: id });

  return result;
};

export const LibraryServices = {
  addLibrary,
  getAllLibrary,
  getSinigleLibrary,
  updateLibrary,
  deleteLibrary,
};
