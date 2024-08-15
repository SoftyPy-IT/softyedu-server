import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { ExamValidations } from './exam.validation';
import { ExamControllers } from './exam.controller';


const router = express.Router();

router.post(
  '/',
  validateRequest(ExamValidations.createExamValidation),
  ExamControllers.createExam,
);
router.get('/', ExamControllers.getAllExam);
router.get('/:id', ExamControllers.getSingleExam);
router.delete('/:id', ExamControllers.deleteExam);
router.patch(
  '/:id',
  validateRequest(ExamValidations.updateExamValidation),
  ExamControllers.updateExam
);

export const examRoutes = router;
