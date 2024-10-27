import express from 'express';
import { validateRequest } from '../../../../../utils/validateRequest';

import { actionRequestLimiter } from '../../../../middlewares/requestLimit';
import { glanceValidation } from './glance.validation';
import { glanceController } from './glance.controller';

const router = express.Router();

router
  .route('/')
  .post(
    // authorization(USER_ROLE.super_admin),
    actionRequestLimiter,
    validateRequest(glanceValidation.glanceValidationSchema),
    glanceController.createGlance,
  )
  .get(glanceController.getAllGlances);

router
  .route('/:id')
  .put(
    // authorization(USER_ROLE.super_admin),
    validateRequest(glanceValidation.updateGlanceValidationSchema),
    glanceController.updateGlance,
  )
  .delete(glanceController.deleteGlance);

export const GlanceRoutes = router;
