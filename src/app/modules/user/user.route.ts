import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import { studentValidations } from '../student/student.validation';
import { validateRequest } from '../../../utils/validateRequest';
import { upload } from '../../../utils/sendImageToCloudinary';

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

export const userRoutes = router;
