import express from 'express';
import { TeacherController } from './teacher.controller';
import { validateRequest } from '../../../utils/validateRequest';
import { teacherValidations } from './teacher.validation';

const router = express.Router();

router.get('/', TeacherController.getAllTeacher);
router.get('/:id', TeacherController.getSingleTeacher);
router.delete('/:id', TeacherController.deleteTeacher);
router.patch(
  '/:id',
  validateRequest(teacherValidations.updateTeacherValidationSchema),
  TeacherController.updateTeacher,
);

export const teacherRoutes = router;
