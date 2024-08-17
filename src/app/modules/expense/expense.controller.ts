import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { ExpenseServices } from './expense.service';


const addExpense = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ExpenseServices.addExpense(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Expense create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllExpense = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ExpenseServices.getAllExpense(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Expense are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleExpense = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await ExpenseServices.getSinigleExpense(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Expense is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteExpense = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await ExpenseServices.deleteExpense(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Expense deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateExpense = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await ExpenseServices.updateExpense(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Expense update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const ExpenseControllers = {
  getAllExpense,
  getSingleExpense,
  deleteExpense,
  updateExpense,
  addExpense,
};
