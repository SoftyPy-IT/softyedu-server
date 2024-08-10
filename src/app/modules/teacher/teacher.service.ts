/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose';
import QueryBuilder from '../../builder/QueryBuilder';
import { Teacher } from './teacher.model';
import { teacherSearchableFields } from '../student/student.constant';
import { TTeacher } from './teacher.interface';
import httpStatus from 'http-status';
import { AppError } from '../../error/AppError';
import { User } from '../user/user.model';

const getAllTeacherFromDB = async (query: Record<string, unknown>) => {
  const teacherQuery = new QueryBuilder(Teacher.find().populate('user'), query)
    .search(teacherSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await teacherQuery.countTotal();
  const teachers = await teacherQuery.modelQuery;

  return {
    meta,
    teachers,
  };
};

const getSingleTeacherFromDB = async (id: string) => {
  const result = await Teacher.findById(id);
  return result;
};
const updateTeacherIntoDB = async (id: string, payload: Partial<TTeacher>) => {
  const { name, present_address, permanent_address, ...remainingStudentData } =
    payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }
  if (present_address && Object.keys(present_address).length) {
    for (const [key, value] of Object.entries(present_address)) {
      modifiedUpdatedData[`present_address.${key}`] = value;
    }
  }
  if (permanent_address && Object.keys(permanent_address).length) {
    for (const [key, value] of Object.entries(permanent_address)) {
      modifiedUpdatedData[`permanent_address.${key}`] = value;
    }
  }

  const result = await Teacher.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteTeacherFromDB = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const deletedStudent = await Teacher.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete teacher!');
    }

    const userId = deletedStudent.user;
    const deletedUser = await User.findByIdAndUpdate(
      userId,
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user!');
    }

    await session.commitTransaction();
    await session.endSession();
    return deletedStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to delete teacher!');
  }
};

export const TeacherServices = {
  getAllTeacherFromDB,
  getSingleTeacherFromDB,
  deleteTeacherFromDB,
  updateTeacherIntoDB,
};
