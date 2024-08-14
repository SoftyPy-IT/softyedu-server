import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { GmeetServices } from './gmeet.service';


const createGmeet = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await GmeetServices.createGmeet(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Gmeet link create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllGmeet = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await GmeetServices.getAllGmeet(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Gmeet are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleGmeet = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await GmeetServices.getSinigleGmeet(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Gmeet is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteGmeet = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await GmeetServices.deleteGmeet(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Gmeet deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateGmeet = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await GmeetServices.updateGmeet(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Gmeet update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const GmeetControllers = {
  getAllGmeet,
  getSingleGmeet,
  deleteGmeet,
  updateGmeet,
  createGmeet,
};
