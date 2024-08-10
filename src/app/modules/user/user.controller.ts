import httpStatus from 'http-status';
import { catchAsync } from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { UserServices } from './user.service';

const createStudent = catchAsync(async (req, res) => {
  const student = req.body;
  const result = await UserServices.createStudentIntoDB(req.file, student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});
const createTeacher = catchAsync(async (req, res) => {
  const teacher = req.body;
  console.log(teacher)
  console.log(req.file);
  const result = await UserServices.createTecherIntoDB(req.file, teacher);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Teacher is created successfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
  createTeacher,
};
