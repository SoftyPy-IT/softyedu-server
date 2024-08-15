import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { HolidayServices } from './holiday.service';



const createHoliday = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await HolidayServices.createHoliday(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Holiday create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllHoliday = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await HolidayServices.getAllHoliday(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Holiday are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleHoliday = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await HolidayServices.getSinigleHoliday(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Holiday is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteHoliday = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await HolidayServices.deleteHoliday(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Holiday deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateHoliday = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await HolidayServices.updateHoliday(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Holiday update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const HolidayControllers = {
  getAllHoliday,
  getSingleHoliday,
  deleteHoliday,
  updateHoliday,
  createHoliday,
};
