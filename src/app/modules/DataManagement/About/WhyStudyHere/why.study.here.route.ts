import express from 'express';
import { validateRequest } from '../../../../../utils/validateRequest';

import { actionRequestLimiter } from '../../../../middlewares/requestLimit';
import { whyStudyValidation } from './why.study.here.validation';
import { WhyStudyController } from './why.study.here..controller';

const router = express.Router();

router
  .route('/')
  .post(
    // authorization(USER_ROLE.super_admin),
    actionRequestLimiter,
    validateRequest(whyStudyValidation.whyStudyValidationSchema),
    WhyStudyController.createWhyStudy,
  )
  .get(WhyStudyController.getAllWhyStudies);

router
  .route('/:id')
  .put(
    // authorization(USER_ROLE.super_admin),
    validateRequest(whyStudyValidation.updateWhyStudyValidationSchema),
    WhyStudyController.updateWhyStudy,
  )
  .delete(WhyStudyController.deleteWhyStudy);

export const WhyStudyRoutes = router;
