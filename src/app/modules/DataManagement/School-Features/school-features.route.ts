import express from 'express';
import { validateRequest } from '../../../../utils/validateRequest';
import { schoolFeaturesValidation } from './school-features.validation';
import { schoolFeatureController } from './school-features.controller';

const router = express.Router();

router
  .route('/')
  .post(
    // authorization(USER_ROLE.super_admin),
    validateRequest(schoolFeaturesValidation.schoolFeaturesValidationSchema),
    schoolFeatureController.createSchoolFeature,
  )
  .get(schoolFeatureController.getAllSchoolFeatures);

router
  .route('/:id')
  .put(
    // authorization(USER_ROLE.super_admin),
    validateRequest(
      schoolFeaturesValidation.updateSchoolFeaturesValidationSchema,
    ),
    schoolFeatureController.updateSchoolFeature,
  )
  .delete(schoolFeatureController.deleteSchoolFeature);

export const SchoolFeatureRoutes = router;
