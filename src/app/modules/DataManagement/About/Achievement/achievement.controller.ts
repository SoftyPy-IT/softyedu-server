import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../../../../utils/catchAsync';
import sendResponse from '../../../../../utils/sendResponse';
import { AchievementServices } from './achievement.service';

const createAchievement = catchAsync(async (req, res) => {
  const achievement = await AchievementServices.createAchievementIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Achievement added successful!',
    data: achievement,
  });
});

const getAllAchievements = catchAsync(async (req, res) => {
  const result = await AchievementServices.getAllAchievementFromDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Histories are retrieved successfully',
    data: result,
  });
});

const updateAchievement = catchAsync(async (req, res) => {
  const { id } = req.params;

  const achievement = await AchievementServices.updateAchievementInDB(
    id,
    req.body,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Achievement update successful!',
    data: achievement,
  });
});
const deleteAchievement = catchAsync(async (req, res) => {
  const { id } = req.params;

  const achievement = await AchievementServices.deleteAchievementFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Achievement deleted successful!',
    data: achievement,
  });
});

export const achievementController = {
  createAchievement,
  getAllAchievements,
  updateAchievement,
  deleteAchievement,
};
