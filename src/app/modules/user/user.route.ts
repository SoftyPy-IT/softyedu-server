import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import { studentValidations } from '../student/student.validation';
import { validateRequest } from '../../../utils/validateRequest';
import { upload } from '../../../utils/sendImageToCloudinary';
import { teacherValidations } from '../teacher/teacher.validation';

const router = express.Router();

router.post(
  '/create-student',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(studentValidations.createStudentValidationSchema),
  UserController.createStudent,
);
router.post(
  '/create-teacher',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(teacherValidations.createTeacherValidationSchema),
  UserController.createTeacher,
);

export const userRoutes = router;
