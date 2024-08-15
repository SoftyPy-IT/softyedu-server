

/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import httpStatus from 'http-status';
import { TAssignment } from './assignment.interface';
import { Assignment } from './assignment.model';
import { assignmentSearchabelField } from './assignment.constant';


const createAssignment = async (payload: TAssignment) => {
  const result = await Assignment.create(payload);
  return result;
};

const getAllAssignment = async (query: Record<string, unknown>) => {
  const homeworkQuery = new QueryBuilder(Assignment.find(), query)
    .search(assignmentSearchabelField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await homeworkQuery.countTotal();
  const assignments = await homeworkQuery.modelQuery;

  return {
    meta,
    assignments,
  };
};
const getSinigleAssignment = async (id: string) => {
  const result = await Assignment.findById(id);
  return result;
};
const updateAssignment = async (id: string, payload: Partial<TAssignment>) => {
  const { ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  const result = await Assignment.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteAssignment = async (id: string): Promise<TAssignment | null> => {

  const result = await Assignment.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  if (!result) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Assignment not found or already deleted',
    );
  }

  return result;
};

export const AssignmentServices = {
  createAssignment,
  getAllAssignment,
  getSinigleAssignment,
  updateAssignment,
  deleteAssignment,
};
