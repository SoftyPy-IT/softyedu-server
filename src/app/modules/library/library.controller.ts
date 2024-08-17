import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { LibraryServices } from './library.service';


const addLibrary = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await LibraryServices.addLibrary(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Library create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAlLibrary = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await LibraryServices.getAllLibrary(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Library are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSinglLibrary = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await LibraryServices.getSinigleLibrary(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Library is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deletLibrary = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await LibraryServices.deleteLibrary(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Library deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updatLibrary = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await LibraryServices.updateLibrary(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Library update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const LibraryControllers = {
  addLibrary,
  getAlLibrary,
  getSinglLibrary,
  updatLibrary,
  deletLibrary
};
