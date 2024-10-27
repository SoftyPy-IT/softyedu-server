import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { MemberServices } from './member.service';

const addMember = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await MemberServices.addMemeber(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Member create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAlMember = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await MemberServices.getAllMemeber(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Member are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSinglMember = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await MemberServices.getSinigleMemeber(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Member is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deletMember = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await MemberServices.deleteMemeber(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Member deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updatMember = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await MemberServices.updateMemeber(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Member update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const MemberControllers = {
  addMember,
  getAlMember,
  getSinglMember,
  updatMember,
  deletMember
};
