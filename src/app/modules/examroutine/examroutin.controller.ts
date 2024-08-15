import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { ExamRoutinServices } from './examroutin.service';



const createExamRoutin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ExamRoutinServices.createExamRoutin(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Examroutin create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllExamRoutin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ExamRoutinServices.getAllExamRoutin(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Examroutin are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleExamRoutin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await ExamRoutinServices.getSinigleExamRoutin(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Examroutin is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteExamRoutin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await ExamRoutinServices.deleteExamRoutin(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Examroutin deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateExamRoutin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await ExamRoutinServices.updateExamRoutin(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Examroutin update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const ExamRoutinControllers = {
  getAllExamRoutin,
  getSingleExamRoutin,
  deleteExamRoutin,
  updateExamRoutin,
  createExamRoutin,
};
