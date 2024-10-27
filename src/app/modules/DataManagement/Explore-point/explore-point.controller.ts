import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../../../utils/catchAsync';
import sendResponse from '../../../../utils/sendResponse';
import { ExplorePointServices } from './explore-point.service';

const createExplorePoint = catchAsync(async (req, res) => {
  const result = await ExplorePointServices.createExplorePointIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Explore point created successful!',
    data: result,
  });
});

const getAllExplorePoints = catchAsync(async (req, res) => {
  const result = await ExplorePointServices.getAllExplorePointFromDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Explore points are retrieved successfully',
    data: result,
  });
});

const updateExplorePoint = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await ExplorePointServices.updateExplorePointInDB(
    id,
    req.body,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Explore point update successful!',
    data: result,
  });
});
const deleteExplorePoint = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await ExplorePointServices.deleteExplorePointFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Explore point deleted successful!',
    data: result,
  });
});

export const explorePointController = {
  createExplorePoint,
  getAllExplorePoints,
  updateExplorePoint,
  deleteExplorePoint,
};
