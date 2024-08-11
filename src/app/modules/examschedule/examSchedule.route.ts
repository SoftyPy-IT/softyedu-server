import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { ExamScheduleValidations } from './examSchedule.validation';
import { ExamScheduleControllers } from './examSchedule.controller';

const router = express.Router();

router.post(
  '/create-exam-schedule',
  validateRequest(ExamScheduleValidations.createExamScheduleSchema),
  ExamScheduleControllers.createExamSchedule,
);
router.get('/', ExamScheduleControllers.getAllExaminations);
router.get('/:id', ExamScheduleControllers.getSingleExamSchedule);
router.delete('/:id', ExamScheduleControllers.deleteExamSchedule);
router.patch('/:id',validateRequest(ExamScheduleValidations.updateExamScheduleSchema), ExamScheduleControllers.updateExamSchedule);

export const examScheduleRoutes = router;
