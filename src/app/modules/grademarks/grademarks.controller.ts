
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { GrademarkServices } from './grademarks.service';


const createGrademark = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await GrademarkServices.createGrademark(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Grademark create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllGrademark = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await GrademarkServices.getAllGrademark(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Grademark are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleGrademark = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await GrademarkServices.getSinigleGrademark(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Grademark is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteGrademark = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await GrademarkServices.deleteGrademark(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Grademark deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateGrademark = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await GrademarkServices.updateGrademark(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Grademark update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const GrademarkControllers = {
  getAllGrademark,
  getSingleGrademark,
  deleteGrademark,
  updateGrademark,
    createGrademark,
};
