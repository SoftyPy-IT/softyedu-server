/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { authRoutes } from '../modules/Auth/auth.route';
import { studentRoutes } from '../modules/student/student.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/students',
    route: studentRoutes,
  },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;