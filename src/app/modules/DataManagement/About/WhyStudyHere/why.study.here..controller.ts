import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../../../../utils/catchAsync';
import sendResponse from '../../../../../utils/sendResponse';
import { WhyStudyServices } from './why.study.here.service';

const createWhyStudy = catchAsync(async (req, res) => {
  const result = await WhyStudyServices.createWhyStudyIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Study details added successful!',
    data: result,
  });
});

const getAllWhyStudies = catchAsync(async (req, res) => {
  const result = await WhyStudyServices.getAllWhyStudyFromDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Study details are retrieved successfully',
    data: result,
  });
});

const updateWhyStudy = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await WhyStudyServices.updateWhyStudyInDB(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Study details update successful!',
    data: result,
  });
});

const deleteWhyStudy = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { type } = req.query;

  // Validate the type to ensure it's either 'mission' or 'benefits'
  if (type !== 'mission' && type !== 'benefits') {
    return sendResponse(res, {
      statusCode: StatusCodes.BAD_REQUEST,
      success: false,
      message: 'Invalid type specified. Use "mission" or "benefits".',
      data: '',
    });
  }

  // Call the service to delete the specified entry
  const result = await WhyStudyServices.deleteWhyStudyFromDB(id, type);

  // Send a successful response
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Study details deleted successfully!',
    data: result,
  });
});

export const WhyStudyController = {
  createWhyStudy,
  getAllWhyStudies,
  updateWhyStudy,
  deleteWhyStudy,
};
