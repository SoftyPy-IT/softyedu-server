import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { ExpenseValidations } from './expense.validation';
import { ExpenseControllers } from './expense.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(ExpenseValidations.createExpenseValidationSchema),
  ExpenseControllers.addExpense,
);
router.get('/', ExpenseControllers.getAllExpense);
router.get('/:id', ExpenseControllers.getSingleExpense);
router.delete('/:id', ExpenseControllers.deleteExpense);
router.patch(
  '/:id',
  validateRequest(ExpenseValidations.updateExpenseValidationSchema),
  ExpenseControllers.updateExpense,
);

export const ExpenseRoutes = router;
