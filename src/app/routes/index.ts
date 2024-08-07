/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { userRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;