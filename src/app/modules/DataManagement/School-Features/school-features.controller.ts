import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../../../utils/catchAsync';
import sendResponse from '../../../../utils/sendResponse';
import { SchoolFeatureServices } from './school-features.service';

const createSchoolFeature = catchAsync(async (req, res) => {
  const result = await SchoolFeatureServices.createSchoolFeatureIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'School feature added successful!',
    data: result,
  });
});

const getAllSchoolFeatures = catchAsync(async (req, res) => {
  const result = await SchoolFeatureServices.getAllSchoolFeatureFromDB(
    req.query,
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'School features are retrieved successfully',
    data: result,
  });
});

const updateSchoolFeature = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await SchoolFeatureServices.updateSchoolFeatureInDB(
    id,
    req.body,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'School feature update successful!',
    data: result,
  });
});
const deleteSchoolFeature = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { index } = req.query
  const featureIndex = index ? Number(index) : undefined;

  // Call the service to delete the feature based on whether index is provided
  const result = await SchoolFeatureServices.deleteSchoolFeatureFromDB(id, featureIndex);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'School feature deleted successfully!',
    data: result,
  });
});


export const schoolFeatureController = {
  createSchoolFeature,
  getAllSchoolFeatures,
  updateSchoolFeature,
  deleteSchoolFeature,
};
