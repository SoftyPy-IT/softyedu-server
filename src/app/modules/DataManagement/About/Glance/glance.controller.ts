import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../../../../utils/catchAsync';
import sendResponse from '../../../../../utils/sendResponse';
import { GlanceServices } from './glance.service';

const createGlance = catchAsync(async (req, res) => {
  const glance = await GlanceServices.createGlanceIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Glance added successful!',
    data: glance,
  });
});

const getAllGlances = catchAsync(async (req, res) => {
  const result = await GlanceServices.getAllGlanceFromDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Histories are retrieved successfully',
    data: result,
  });
});

const updateGlance = catchAsync(async (req, res) => {
  const { id } = req.params;

  const glance = await GlanceServices.updateGlanceInDB(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Glance update successful!',
    data: glance,
  });
});
const deleteGlance = catchAsync(async (req, res) => {
  const { id } = req.params;

  const glance = await GlanceServices.deleteGlanceFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Glance deleted successful!',
    data: glance,
  });
});

export const glanceController = {
  createGlance,
  getAllGlances,
  updateGlance,
  deleteGlance,
};
