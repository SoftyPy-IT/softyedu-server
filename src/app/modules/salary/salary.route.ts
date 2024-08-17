import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { SalaryValidations } from './salary.validation';
import { SalaryControllers } from './salary.controller';


const router = express.Router();

router.post(
  '/',
  validateRequest(SalaryValidations.createSalaryValidation),
  SalaryControllers.addSalary,
);
router.get('/', SalaryControllers.getAllSalary);
router.get('/:id', SalaryControllers.getSingleSalary);
router.delete('/:id', SalaryControllers.deleteSalary);
router.patch(
  '/:id',
  validateRequest(SalaryValidations.updateSalalryValidation),
  SalaryControllers.updateSalary
);

export const SalaryRoutes = router;
