import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';

const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {id} = req.params
    const result = await StudentServices.getSingleStudentFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {id} = req.params
    const result = await StudentServices.deleteStudentFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student deleted succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const updateStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {id} = req.params
    const result = await StudentServices.deleteStudentFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student deleted succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
  updateStudent
};
