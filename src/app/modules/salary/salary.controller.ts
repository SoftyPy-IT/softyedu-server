import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { SalaryServices } from './salary.service';


const addSalary = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await SalaryServices.addSalary(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Salary create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllSalary = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await SalaryServices.getAllSalary(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Salary are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleSalary = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await SalaryServices.getSinigleSalary(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Salary is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteSalary = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await SalaryServices.deleteSalary(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Salary deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateSalary = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await SalaryServices.updateSalary(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Salary update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const SalaryControllers = {
  getAllSalary,
  getSingleSalary,
  deleteSalary,
  updateSalary,
  addSalary,
};
