import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../../../error/AppError';

import sanitizePayload from '../../../../middlewares/updateData';
import QueryBuilder from '../../../../builder/QueryBuilder';
import { SearchableFields } from './why.study.here.const';
import { TWhyStudy } from './why.study.here.interface';
import WhyStudy from './why.study.here.model';
import { Document } from 'mongoose';

const createWhyStudyIntoDB = async (payload: TWhyStudy) => {
  const result = await WhyStudy.create(payload);
  return result;
};

const getAllWhyStudyFromDB = async (query: Record<string, unknown>) => {
  const whyStudyQuery = new QueryBuilder(WhyStudy.find(), query)
    .search(SearchableFields)
    .sort()
    .paginate();

  const meta = await whyStudyQuery.countTotal();
  const results = await whyStudyQuery.modelQuery;

  const filteredData = (results as (TWhyStudy & Document)[])
    .map((item) => {
      const itemObj = item.toObject();

      // Check for the query conditions and exclude empty fields
      if (query.mission) {
        if (!Array.isArray(itemObj.mission) || itemObj.mission.length === 0) {
          return null; // Exclude this item if mission is empty
        }
        return {
          ...itemObj,
          benefits: undefined, // Exclude benefits if we're only interested in mission
        };
      }

      if (query.benefits) {
        if (!Array.isArray(itemObj.benefits) || itemObj.benefits.length === 0) {
          return null; // Exclude this item if benefits is empty
        }
        return {
          ...itemObj,
          mission: undefined, // Exclude mission if we're only interested in benefits
        };
      }

      // Return the item as is if no specific query is provided
      return itemObj;
    })
    .filter((item) => item !== null); // Filter out null entries

  return {
    meta,
    data: filteredData,
  };
};

const updateWhyStudyInDB = async (id: string, payload: TWhyStudy) => {
  const sanitizeData = sanitizePayload(payload);

  const updatedWhyStudy = await WhyStudy.findByIdAndUpdate(id, sanitizeData, {
    new: true,
    runValidators: true,
  });

  if (!updatedWhyStudy) {
    throw new AppError(StatusCodes.NOT_FOUND, 'WhyStudy not found.');
  }

  return updatedWhyStudy;
};

const deleteWhyStudyFromDB = async (
  id: string,
  type: 'mission' | 'benefits',
) => {
  const updateField = type === 'mission' ? 'mission' : 'benefits';
  const otherField = type === 'mission' ? 'benefits' : 'mission';

  const whyStudy = await WhyStudy.findById(id);

  if (!whyStudy) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      `No document found with the provided ID.`,
    );
  }

  // @ts-ignore
  if (whyStudy[otherField].length === 0) {
    await WhyStudy.findByIdAndDelete(id);
    return {
      message: `${type} is updated, but the document is deleted because the other field is empty.`,
    };
  }

  const updatedWhyStudy = await WhyStudy.findByIdAndUpdate(
    id,
    { $set: { [updateField]: [] } },
    { new: true },
  );

  return updatedWhyStudy;
};

export const WhyStudyServices = {
  createWhyStudyIntoDB,
  getAllWhyStudyFromDB,
  updateWhyStudyInDB,
  deleteWhyStudyFromDB,
};
