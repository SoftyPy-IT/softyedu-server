import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../../../error/AppError';
import sanitizePayload from '../../../../middlewares/updateData';
import QueryBuilder from '../../../../builder/QueryBuilder';

import { TGlance } from './glance.interface';
import Glance from './glance.model';
import { GlanceSearchableFields } from './glance.const';

const createGlanceIntoDB = async (payload: TGlance) => {
  const glance = await Glance.create(payload);
  return glance;
};
const getAllGlanceFromDB = async (query: Record<string, unknown>) => {
  const glanceQuery = new QueryBuilder(Glance.find(), query)
    .search(GlanceSearchableFields)
    .sort()
    .paginate();

  const meta = await glanceQuery.countTotal();
  const data = await glanceQuery.modelQuery;

  return {
    meta,
    data,
  };
};

const updateGlanceInDB = async (id: string, payload: TGlance) => {
  const sanitizeData = sanitizePayload(payload);

  const updatedGlance = await Glance.findByIdAndUpdate(id, sanitizeData, {
    new: true,
    runValidators: true,
  });

  if (!updatedGlance) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Glance not found.');
  }

  return updatedGlance;
};

const deleteGlanceFromDB = async (id: string) => {
  const deletedGlance = await Glance.findByIdAndDelete(id);

  if (!deletedGlance) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Glance not found.');
  }

  return deletedGlance;
};

export const GlanceServices = {
  createGlanceIntoDB,
  getAllGlanceFromDB,
  updateGlanceInDB,
  deleteGlanceFromDB,
};
