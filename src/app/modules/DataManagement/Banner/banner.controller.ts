import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../../../utils/catchAsync';
import sendResponse from '../../../../utils/sendResponse';
import { BannerServices } from './banner.service';

const createBanner = catchAsync(async (req, res) => {
  const banner = await BannerServices.createBannerIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Banner created successful!',
    data: banner,
  });
});

const getAllBanners = catchAsync(async (req, res) => {
  const result = await BannerServices.getAllBannerFromDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Banners are retrieved successfully',
    data: result,
  });
});

const updateBanner = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await BannerServices.updateBannerInDB(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Banner update successful!',
    data: result,
  });
});
const deleteBanner = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await BannerServices.deleteBannerFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Banner deleted successful!',
    data: result,
  });
});

export const bannerController = {
  createBanner,
  getAllBanners,
  updateBanner,
  deleteBanner,
};
