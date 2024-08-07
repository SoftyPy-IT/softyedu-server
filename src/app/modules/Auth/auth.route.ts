import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { AuthValidation } from './auth.validation';
import { AuthController } from './auth.controller';
import { auth } from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.loginUser,
);
router.post(
  '/change-password',
  auth(USER_ROLE.admin,USER_ROLE.student,USER_ROLE.teacher),
  validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthController.changePassword,
);




export const authRoutes = router;
