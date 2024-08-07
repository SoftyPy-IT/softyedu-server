/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose';
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';
import { sendImageToCloudinary } from '../../../utils/sendImageToCloudinary';
import { User } from './user.model';
import { AppError } from '../../error/AppError';
import httpStatus from 'http-status';
import { Student } from '../student/student.model';

const createStudentIntoDB = async (file: any, payload: TStudent) => {
  console.log(file);
  const userData: Partial<TUser> = {};

  userData.role = 'student';
  userData.email = payload.email;
  userData.id = payload.id;
  userData.password = payload.password || 'student123';
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    if (file) {
      const imageName = `${payload.name.firstName}`;
      const path = file?.path;
      const { secure_url } = await sendImageToCloudinary(imageName, path);
      payload.profileImg = secure_url as string;
    }

    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user!');
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    // create student
    const newStudent = await Student.create([payload], { session });

    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student!');
    }

    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

export const UserServices = {
  createStudentIntoDB,
};
