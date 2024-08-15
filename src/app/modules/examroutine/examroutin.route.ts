import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { ExamRoutinsValidaions } from './examroutin.validation';
import { ExamRoutinControllers } from './examroutin.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(ExamRoutinsValidaions.createExamRoutinValidation),
  ExamRoutinControllers.createExamRoutin,
);
router.get('/', ExamRoutinControllers.getAllExamRoutin);
router.get('/:id', ExamRoutinControllers.getSingleExamRoutin);
router.delete('/:id', ExamRoutinControllers.deleteExamRoutin);
router.patch(
  '/:id',
  validateRequest(ExamRoutinsValidaions.updateExamRoutinValidation),
  ExamRoutinControllers.updateExamRoutin,
);

export const examRoutinRoutes = router;
