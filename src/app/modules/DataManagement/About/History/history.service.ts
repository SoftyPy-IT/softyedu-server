import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../../../error/AppError';
import { THistory } from './history.interface';
import History from './history.model';
import sanitizePayload from '../../../../middlewares/updateData';
import QueryBuilder from '../../../../builder/QueryBuilder';
import { SearchableFields } from './history.const';

const createHistoryIntoDB = async (payload: THistory) => {
  const history = await History.create(payload);
  return history;
};

const getAllHistoryFromDB = async (query: Record<string, unknown>) => {
  const historyQuery = new QueryBuilder(History.find(), query)
    .search(SearchableFields)
    .sort()
    .paginate();

  const meta = await historyQuery.countTotal();
  const data = await historyQuery.modelQuery;

  return {
    meta,
    data,
  };
};

const updateHistoryInDB = async (id: string, payload: THistory) => {
  const sanitizeData = sanitizePayload(payload);

  const updatedHistory = await History.findByIdAndUpdate(id, sanitizeData, {
    new: true,
    runValidators: true,
  });

  if (!updatedHistory) {
    throw new AppError(StatusCodes.NOT_FOUND, 'History not found.');
  }

  return updatedHistory;
};

const deleteHistoryFromDB = async (id: string) => {
  const deletedHistory = await History.findByIdAndDelete(id);

  if (!deletedHistory) {
    throw new AppError(StatusCodes.NOT_FOUND, 'History not found.');
  }

  return deletedHistory;
};

export const HistoryServices = {
  createHistoryIntoDB,
  getAllHistoryFromDB,
  updateHistoryInDB,
  deleteHistoryFromDB,
};
