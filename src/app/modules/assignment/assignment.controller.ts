import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { AssignmentServices } from './assignment.service';



const createAssignment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AssignmentServices.createAssignment(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Assignment create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAlleAssignment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AssignmentServices.getAllAssignment(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Assignment are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleAssignment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await AssignmentServices.getSinigleAssignment(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Assignment is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteAssignment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await AssignmentServices.deleteAssignment(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Assignment deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateAssignment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await AssignmentServices.updateAssignment(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Assignment update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AssignmentControllers = {
  createAssignment,
  getAlleAssignment,
  getSingleAssignment,
  deleteAssignment,
  updateAssignment
};
