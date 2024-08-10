import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { TeacherServices } from './teacher.service';

const getAllTeacher = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await TeacherServices.getAllTeacherFromDB(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Teacher is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleTeacher = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const {id} = req.params
      const result = await TeacherServices.getSingleTeacherFromDB(id);
  
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Teacher is retrieved succesfully',
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const deleteTeacher = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const {id} = req.params
      const result = await TeacherServices.deleteTeacherFromDB(id);
  
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Teacher deleted succesfully',
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const updateTeacher = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const {id} = req.params
      const result = await TeacherServices.updateTeacherIntoDB(id, req.body);
  
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Teacher update succesfully',
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

export const TeacherController = {
  getAllTeacher,
  getSingleTeacher,
  deleteTeacher,
  updateTeacher
};
