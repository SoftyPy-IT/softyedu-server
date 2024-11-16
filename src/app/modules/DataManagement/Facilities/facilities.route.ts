
import express from 'express';
import { validateRequest } from '../../../../utils/validateRequest';
import { facilitiesValidation } from './facilities.validation';
import { facilitiesController } from './facilities.controller';

const router = express.Router();

router
  .route('/')
  .post(
    // authorization(USER_ROLE.super_admin),
    validateRequest(facilitiesValidation.facilitiesValidationSchema),
    facilitiesController.createFacilities,
  )
  .get(facilitiesController.getAllFacilities);


export const FacilitiesRoutes = router;
