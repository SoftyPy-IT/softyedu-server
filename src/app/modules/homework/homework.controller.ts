import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { HomeworkServices } from './homework.service';


const createHomework = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await HomeworkServices.createHomework(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Homework create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllHomework = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await HomeworkServices.getAllHomework(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Homework are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleHomework = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await HomeworkServices.getSinigleHomework(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Homework is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteHomework = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await HomeworkServices.deleteHomework(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Homework deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateHomework = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await HomeworkServices.updateHomework(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Homework update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const HomeworkControllers = {
  getAllHomework,
  getSingleHomework,
  deleteHomework,
  updateHomework,
  createHomework,
};
