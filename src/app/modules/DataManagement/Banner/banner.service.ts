import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../../error/AppError';
import sanitizePayload from '../../../middlewares/updateData';
import { TBanner } from './banner.interface';
import { Banner } from './banner.model';
import QueryBuilder from '../../../builder/QueryBuilder';
import { addImageToFolder } from '../../../middlewares/image-upload-folder';

const createBannerIntoDB = async (payload: TBanner) => {

  // Check for existing banner
  const existingBanner = await Banner.findOne(
    {
      title: payload.title,
      description: payload.description,
    }
  );

  if (existingBanner) {
    throw new AppError(
      StatusCodes.CONFLICT,
      'A banner with the same title, or description already exists.'
    );
  }

  await addImageToFolder(payload.folder_name, payload.image);
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

const getSingleBannerFromDB = async (id: string) => {
  const banner = await Banner.findById(id);

  if (!banner) {
    throw new AppError(StatusCodes.NOT_FOUND, 'No data found');
  }

  return banner;
};


const updateBannerInDB = async (id: string, payload: TBanner) => {

  // Check for existing banner with the same details (excluding the current banner)
  const existingBanner = await Banner.findOne(
    {
      title: payload.title,
      description: payload.description,
      _id: { $ne: id },
    },

  );

  if (existingBanner) {
    throw new AppError(
      StatusCodes.CONFLICT,
      'A banner with the same title, or description already exists.'
    );
  }

  await addImageToFolder(payload.folder_name, payload.image);
  // Sanitize the payload
  const sanitizeData = sanitizePayload(payload);

  // Update the banner
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
  getSingleBannerFromDB,
  updateBannerInDB,
  deleteBannerFromDB,
};
