import express from 'express';
import { validateRequest } from '../../../../../utils/validateRequest';

import { actionRequestLimiter } from '../../../../middlewares/requestLimit';
import { achievementValidation } from './achievement.validation';
import { achievementController } from './achievement.controller';

const router = express.Router();

router
  .route('/')
  .post(
    // authorization(USER_ROLE.super_admin),
    actionRequestLimiter,
    validateRequest(achievementValidation.achievementValidationSchema),
    achievementController.createAchievement,
  )
  .get(achievementController.getAllAchievements);

router
  .route('/:id')
  .put(
    // authorization(USER_ROLE.super_admin),
    validateRequest(achievementValidation.updateAchievementValidationSchema),
    achievementController.updateAchievement,
  )
  .delete(achievementController.deleteAchievement);

export const AchievementRoutes = router;
