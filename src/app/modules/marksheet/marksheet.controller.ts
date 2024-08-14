import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { MarksheetServices } from './marksheet.service';


const createMarksheet = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await MarksheetServices.createMarksheet(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Marksheet create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllMarksheet = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await MarksheetServices.getAllMarksheet(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Marksheet are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleMarksheet = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await MarksheetServices.getSinigleMarksheet(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Marksheet is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteMarksheet = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await MarksheetServices.deleteMarksheet(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Marksheet deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateMarksheet = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await MarksheetServices.updateMarksheet(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Marksheet update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const MarksheetControllers = {
  getAllMarksheet,
  getSingleMarksheet,
  deleteMarksheet,
  updateMarksheet,
    createMarksheet,
};
