import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../../../error/AppError';
import sanitizePayload from '../../../../middlewares/updateData';
import QueryBuilder from '../../../../builder/QueryBuilder';
import { SearchableFields } from './achievement.const';
import { TAchievement } from './achievement.interface';
import Achievement from './achievement.model';

const createAchievementIntoDB = async (payload: TAchievement) => {
  const achievement = await Achievement.create(payload);
  return achievement;
};
const getAllAchievementFromDB = async (query: Record<string, unknown>) => {
  const achievementQuery = new QueryBuilder(Achievement.find(), query)
    .search(SearchableFields)
    .sort()
    .paginate();

  const meta = await achievementQuery.countTotal();
  const data = await achievementQuery.modelQuery;

  return {
    meta,
    data,
  };
};

const updateAchievementInDB = async (id: string, payload: TAchievement) => {
  const sanitizeData = sanitizePayload(payload);

  const updatedAchievement = await Achievement.findByIdAndUpdate(
    id,
    sanitizeData,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedAchievement) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Achievement not found.');
  }

  return updatedAchievement;
};

const deleteAchievementFromDB = async (id: string) => {
  const deletedAchievement = await Achievement.findByIdAndDelete(id);

  if (!deletedAchievement) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Achievement not found.');
  }

  return deletedAchievement;
};

export const AchievementServices = {
  createAchievementIntoDB,
  getAllAchievementFromDB,
  updateAchievementInDB,
  deleteAchievementFromDB,
};
