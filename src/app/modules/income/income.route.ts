import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { IncomeValidations } from './income.validation';
import { IncomeControllers } from './income.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(IncomeValidations.createIncomeValidationSchema),
  IncomeControllers.addIncome,
);
router.get('/', IncomeControllers.getAllIncome);
router.get('/:id', IncomeControllers.getSingleIncome);
router.delete('/:id', IncomeControllers.deleteIncome);
router.patch(
  '/:id',
  validateRequest(IncomeValidations.updateIncomeValidationSchema),
  IncomeControllers.updateIncome
);

export const IncomeRoutes = router;
