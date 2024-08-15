/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import httpStatus from 'http-status';
import { Holiday } from './holiday.model';
import { THolidy } from './holiday.interface';
import { holidaySearchabelField } from './holiday.constant';

const createHoliday = async (payload: THolidy) => {
  const result = await Holiday.create(payload);
  return result;
};

const getAllHoliday = async (query: Record<string, unknown>) => {
  const homeworkQuery = new QueryBuilder(Holiday.find(), query)
    .search(holidaySearchabelField)
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
const getSinigleHoliday = async (id: string) => {
  const result = await Holiday.findById(id);
  return result;
};
const updateHoliday = async (id: string, payload: Partial<THolidy>) => {
  const { ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  const result = await Holiday.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteHoliday = async (id: string): Promise<THolidy | null> => {

  const result = await Holiday.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  if (!result) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Holiday not found or already deleted',
    );
  }

  return result;
};

export const HolidayServices = {
  createHoliday,
  getAllHoliday,
  getSinigleHoliday,
  updateHoliday,
  deleteHoliday,
};
