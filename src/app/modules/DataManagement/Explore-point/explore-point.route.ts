import express from 'express';
import { validateRequest } from '../../../../utils/validateRequest';
import { explorePointValidation } from './explore-point.validation';
import { explorePointController } from './explore-point.controller';

const router = express.Router();

router
  .route('/')
  .post(
    // authorization(USER_ROLE.super_admin),
    validateRequest(explorePointValidation.explorePointValidationSchema),
    explorePointController.createExplorePoint,
  )
  .get(explorePointController.getAllExplorePoints);

router
  .route('/:id')
  .put(
    // authorization(USER_ROLE.super_admin),
    validateRequest(explorePointValidation.updateExplorePointValidationSchema),
    explorePointController.updateExplorePoint,
  )
  .delete(explorePointController.deleteExplorePoint);

export const ExplorePointRoutes = router;
