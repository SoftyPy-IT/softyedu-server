import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../../../../utils/catchAsync';
import sendResponse from '../../../../../utils/sendResponse';
import { HistoryServices } from './history.service';

const createHistory = catchAsync(async (req, res) => {
  const history = await HistoryServices.createHistoryIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'History added successful!',
    data: history,
  });
});

const getAllHistories = catchAsync(async (req, res) => {
  const result = await HistoryServices.getAllHistoryFromDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Histories are retrieved successfully',
    data: result,
  });
});

const updateHistory = catchAsync(async (req, res) => {
  const { id } = req.params;

  const history = await HistoryServices.updateHistoryInDB(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'History update successful!',
    data: history,
  });
});
const deleteHistory = catchAsync(async (req, res) => {
  const { id } = req.params;

  const history = await HistoryServices.deleteHistoryFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'History deleted successful!',
    data: history,
  });
});

export const historyController = {
  createHistory,
  getAllHistories,
  updateHistory,
  deleteHistory,
};
