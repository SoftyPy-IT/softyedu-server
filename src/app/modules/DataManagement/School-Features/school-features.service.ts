import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../../error/AppError';
import sanitizePayload from '../../../middlewares/updateData';

import QueryBuilder from '../../../builder/QueryBuilder';
import { TSchoolFeatures } from './school-features.interface';
import { SchoolFeatures } from './school-features.model';
import { SchoolSearchableFields } from './school-featues.const';

const createSchoolFeatureIntoDB = async (payload: TSchoolFeatures) => {
  const existingSchoolFeature = await SchoolFeatures.findOne({
    $and: [{ title: payload.title }, { sub_title: payload.sub_title }],
  });

  if (existingSchoolFeature) {
    throw new AppError(
      StatusCodes.CONFLICT,
      'A School feature with the same title and sub title already exists.',
    );
  }
  const result = await SchoolFeatures.create(payload);
  return result;
};

const getAllSchoolFeatureFromDB = async (query: Record<string, unknown>) => {
  const schoolFeatureQuery = new QueryBuilder(SchoolFeatures.find(), query)
    .search(SchoolSearchableFields)
    .sort()
    .paginate();

  const meta = await schoolFeatureQuery.countTotal();
  const data = await schoolFeatureQuery.modelQuery;

  return {
    meta,
    data,
  };
};

const updateSchoolFeatureInDB = async (
  id: string,
  payload: TSchoolFeatures,
) => {
  const existingSchoolFeature = await SchoolFeatures.findOne({
    $and: [{ title: payload.title }, { sub_title: payload.sub_title }],
    _id: { $ne: id },
  });

  if (existingSchoolFeature) {
    throw new AppError(
      StatusCodes.CONFLICT,
      'A School feature with the same title and sub title already exists.',
    );
  }

  const sanitizeData = sanitizePayload(payload);

  const updatedSchoolFeature = await SchoolFeatures.findByIdAndUpdate(
    id,
    sanitizeData,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedSchoolFeature) {
    throw new AppError(StatusCodes.NOT_FOUND, 'School feature not found.');
  }

  return updatedSchoolFeature;
};

const deleteSchoolFeatureFromDB = async (id: string) => {
  const deletedSchoolFeature = await SchoolFeatures.findByIdAndDelete(id);

  if (!deletedSchoolFeature) {
    throw new AppError(StatusCodes.NOT_FOUND, 'School feature not found.');
  }

  return deletedSchoolFeature;
};

export const SchoolFeatureServices = {
  createSchoolFeatureIntoDB,
  getAllSchoolFeatureFromDB,
  updateSchoolFeatureInDB,
  deleteSchoolFeatureFromDB,
};
