

import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { ResultValidationSchema } from './result.validation';
import { ResultControllers } from './result.controller';


const router = express.Router();

router.post(
  '/',
  validateRequest(ResultValidationSchema.createResultValidationSchema),
  ResultControllers.addResult,
);
router.get('/', ResultControllers.getAllResult);
router.get('/:id', ResultControllers.getSingleResult);
router.delete('/:id', ResultControllers.deleteResult);
router.patch(
  '/:id',
  validateRequest(ResultValidationSchema.updateResultValidationSchema),
  ResultControllers.updateResult,
);

export const resultRoutes = router;
