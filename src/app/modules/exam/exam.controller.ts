import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { ExamServices } from './exam.service';

const createExam = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ExamServices.createExam(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Exam create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllExam = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ExamServices.getAllExam(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Exam are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleExam = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await ExamServices.getSinigleExam(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Exam is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteExam = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await ExamServices.deleteExam(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Exam deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateExam = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await ExamServices.updateExam(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Exam update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const ExamControllers = {
  getAllExam,
  getSingleExam,
  deleteExam,
  updateExam,
  createExam,
};
