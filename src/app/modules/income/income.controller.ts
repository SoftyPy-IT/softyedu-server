import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { IncomeServices } from './income.service';

const addIncome = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await IncomeServices.addIncome(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Income create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllIncome = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await IncomeServices.getAllIncome(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Income are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleIncome = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await IncomeServices.getSinigleIncome(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Income is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteIncome = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await IncomeServices.deleteIncome(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Income deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateIncome = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await IncomeServices.updateIncome(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Income update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const IncomeControllers = {
  getAllIncome,
  getSingleIncome,
  deleteIncome,
  updateIncome,
  addIncome,
};
