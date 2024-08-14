import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { ResultServices } from './result.service';

const addResult = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ResultServices.createResult(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Result create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllResult = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ResultServices.getAllResult(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Result are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleResult = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await ResultServices.getSinigleResult(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Result is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteResult = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await ResultServices.deleteResult(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Result deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateResult = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await ResultServices.updateResult(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Result update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const ResultControllers = {
  getAllResult,
  getSingleResult,
  deleteResult,
  updateResult,
   addResult,
};
