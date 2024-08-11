import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import { ScheduleServices } from './examSchedule.service';
import httpStatus from 'http-status';

const createExamSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ScheduleServices.createExamSchedule(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Exame schedule is create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllExaminations = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ScheduleServices.getAllExamSchedule(req.query);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Schedule is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleExamSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {id} = req.params;
    const result = await ScheduleServices.getSingleExamSchedule(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single Schedule is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteExamSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {id} = req.params;
    const result = await ScheduleServices.deleteExamSchedule(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Schedule is delete succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const updateExamSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {id} = req.params;
    const result = await ScheduleServices.updateExamSchedule(id,req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Schedule update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const ExamScheduleControllers = {
  createExamSchedule,
  getAllExaminations,
  getSingleExamSchedule,
  deleteExamSchedule,
  updateExamSchedule
};
