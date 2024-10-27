import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../../error/AppError';
import sanitizePayload from '../../../middlewares/updateData';

import QueryBuilder from '../../../builder/QueryBuilder';
import { TExplorePoint } from './explore-point.interface';
import { ExplorePoint } from './explore-point.model';

const createExplorePointIntoDB = async (payload: TExplorePoint) => {
  const result = await ExplorePoint.create(payload);
  return result;
};

const getAllExplorePointFromDB = async (query: Record<string, unknown>) => {
  const explorePointQuery = new QueryBuilder(ExplorePoint.find(), query)
    .sort()
    .paginate();

  const meta = await explorePointQuery.countTotal();
  const data = await explorePointQuery.modelQuery;

  return {
    meta,
    data,
  };
};

const updateExplorePointInDB = async (id: string, payload: TExplorePoint) => {
  const sanitizeData = sanitizePayload(payload);

  const updatedExplorePoint = await ExplorePoint.findByIdAndUpdate(
    id,
    sanitizeData,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedExplorePoint) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Explore point not found.');
  }

  return updatedExplorePoint;
};

const deleteExplorePointFromDB = async (id: string) => {
  const deletedExplorePoint = await ExplorePoint.findByIdAndDelete(id);

  if (!deletedExplorePoint) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Explore point not found.');
  }

  return deletedExplorePoint;
};

export const ExplorePointServices = {
  createExplorePointIntoDB,
  getAllExplorePointFromDB,
  updateExplorePointInDB,
  deleteExplorePointFromDB,
};
