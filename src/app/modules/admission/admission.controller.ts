import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { AdmissionServices } from './admission.service';

const addToAdmission = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AdmissionServices.addToAdmission(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Admission to succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllAdmission = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AdmissionServices.getAllAdmission(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Admission are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleAdmission = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await AdmissionServices.getSinigleAdmission(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Admission is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteAdmission = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await AdmissionServices.deleteAdmission(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Admission deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateAdmission = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await AdmissionServices.updateAdmission(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Admission update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AdmissionController = {
  getAllAdmission,
  getSingleAdmission,
  deleteAdmission,
  updateAdmission,
  addToAdmission,
};
