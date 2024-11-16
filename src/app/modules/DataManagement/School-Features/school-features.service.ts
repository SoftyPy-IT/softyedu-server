import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../../error/AppError';
import sanitizePayload from '../../../middlewares/updateData';

import QueryBuilder from '../../../builder/QueryBuilder';
import { TSchoolFeatures } from './school-features.interface';
import { SchoolFeatures } from './school-features.model';
import { SchoolSearchableFields } from './school-featues.const';
import { addImageToFolder } from '../../../middlewares/image-upload-folder';

const createSchoolFeatureIntoDB = async (payload: TSchoolFeatures) => {
  const existingSchoolFeature = await SchoolFeatures.findOne({ title: payload.title });

  if (existingSchoolFeature) {
    throw new AppError(
      StatusCodes.CONFLICT,
      'A School feature with the same title already exists.',
    );
  }

  for (const feature of payload.features) {
    await addImageToFolder(feature.folder_name, feature.image);
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
    title: payload.title,
    _id: { $ne: id },
  });

  if (existingSchoolFeature) {
    throw new AppError(
      StatusCodes.CONFLICT,
      'A School feature with the same title already exists.',
    );
  }
  for (const feature of payload.features) {
    await addImageToFolder(feature.folder_name, feature.image);
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

const deleteSchoolFeatureFromDB = async (id: string, featureIndex?: number) => {
  // Find the SchoolFeatures document by ID
  const schoolFeature = await SchoolFeatures.findById(id);

  if (!schoolFeature) {
    throw new AppError(StatusCodes.NOT_FOUND, 'School feature not found.');
  }

  // If no index is provided, delete the entire SchoolFeatures document
  if (featureIndex === undefined) {
    const deletedSchoolFeature = await SchoolFeatures.findByIdAndDelete(id);

    if (!deletedSchoolFeature) {
      throw new AppError(StatusCodes.NOT_FOUND, 'School feature not found.');
    }

    return deletedSchoolFeature;
  }

  // If an index is provided, ensure it's valid (i.e., it's within the bounds of the features array)
  if (featureIndex < 0 || featureIndex >= schoolFeature.features.length) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid feature index.');
  }

  // Remove the feature at the given index
  schoolFeature.features.splice(featureIndex, 1);

  // Save the updated document
  await schoolFeature.save();

  return schoolFeature;
};



export const SchoolFeatureServices = {
  createSchoolFeatureIntoDB,
  getAllSchoolFeatureFromDB,
  updateSchoolFeatureInDB,
  deleteSchoolFeatureFromDB,
};
