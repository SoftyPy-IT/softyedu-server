import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../../error/AppError';
import sanitizePayload from '../../../middlewares/updateData';
import { TBanner } from './banner.interface';
import { Banner } from './banner.model';
import QueryBuilder from '../../../builder/QueryBuilder';

const createBannerIntoDB = async (payload: TBanner) => {
  const existingBanner = await Banner.findOne({
    $and: [
      { image: payload.image },
      { title: payload.title },
      { description: payload.description },
    ],
  });

  if (existingBanner) {
    throw new AppError(
      StatusCodes.CONFLICT,
      'A banner with the same image, title, or description already exists.',
    );
  }
  const banner = await Banner.create(payload);
  return banner;
};

const getAllBannerFromDB = async (query: Record<string, unknown>) => {
  const bannerQuery = new QueryBuilder(Banner.find(), query).sort().paginate();

  const meta = await bannerQuery.countTotal();
  const data = await bannerQuery.modelQuery;

  return {
    meta,
    data,
  };
};

const updateBannerInDB = async (id: string, payload: TBanner) => {
  const existingBanner = await Banner.findOne({
    $and: [
      { image: payload.image },
      { title: payload.title },
      { description: payload.description },
    ],
    _id: { $ne: id },
  });

  if (existingBanner) {
    throw new AppError(
      StatusCodes.CONFLICT,
      'A banner with the same image, title, or description already exists.',
    );
  }

  const sanitizeData = sanitizePayload(payload);

  const updatedBanner = await Banner.findByIdAndUpdate(id, sanitizeData, {
    new: true,
    runValidators: true,
  });

  if (!updatedBanner) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Banner not found.');
  }

  return updatedBanner;
};

const deleteBannerFromDB = async (id: string) => {
  const deletedBanner = await Banner.findByIdAndDelete(id);

  if (!deletedBanner) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Banner not found.');
  }

  return deletedBanner;
};

export const BannerServices = {
  createBannerIntoDB,
  getAllBannerFromDB,
  updateBannerInDB,
  deleteBannerFromDB,
};