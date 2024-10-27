import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../../../../utils/catchAsync';
import sendResponse from '../../../../../utils/sendResponse';
import { EventsServices } from './events.service';

const createEvents = catchAsync(async (req, res) => {
  const result = await EventsServices.createEventsIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Events added successful!',
    data: result,
  });
});

const getAllEvents = catchAsync(async (req, res) => {
  const result = await EventsServices.getAllEventsFromDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Events are retrieved successfully',
    data: result,
  });
});

const updateEvents = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await EventsServices.updateEventsIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Events update successful!',
    data: result,
  });
});
const deleteEvents = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await EventsServices.deleteEventsFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Events deleted successful!',
    data: result,
  });
});

export const eventsController = {
  createEvents,
  getAllEvents,
  updateEvents,
  deleteEvents,
};
