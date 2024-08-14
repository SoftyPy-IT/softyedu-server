import express from 'express';
import { GmeetValidationSchema } from './gmeet.validation';
import { validateRequest } from '../../../utils/validateRequest';
import { GmeetControllers } from './gmeet.controller';


const router = express.Router();

router.post(
  '/',
  validateRequest(GmeetValidationSchema.CreateGmeetValidationSchema),
  GmeetControllers.createGmeet,
);
router.get('/', GmeetControllers.getAllGmeet);
router.get('/:id', GmeetControllers.getSingleGmeet);
router.delete('/:id', GmeetControllers.deleteGmeet);
router.patch(
  '/:id',
  validateRequest(GmeetValidationSchema.updateGmeetValidationSchema),
  GmeetControllers.updateGmeet
);

export const gmeetRoutes = router;
