/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { authRoutes } from '../modules/Auth/auth.route';
import { studentRoutes } from '../modules/student/student.route';
import { teacherRoutes } from '../modules/teacher/teacher.route';
import { examScheduleRoutes } from '../modules/examschedule/examSchedule.route';
import { admissionRoutes } from '../modules/admission/admission.route';
import { gmeetRoutes } from '../modules/gmeet/gmeet.route';
import { resultRoutes } from '../modules/result/result.route';
import { marksheetRoutes } from '../modules/marksheet/marksheet.route';
import { grademarkRoutes } from '../modules/grademarks/grademarks.route';

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
  {
    path: '/teachers',
    route: teacherRoutes,
  },
  {
    path: '/exam-schedule',
    route: examScheduleRoutes,
  },
  {
    path: '/admission',
    route: admissionRoutes,
  },
  {
    path: '/gmeet',
    route: gmeetRoutes,
  },
  {
    path: '/result',
    route: resultRoutes,
  },
  {
    path: '/marksheet',
    route: marksheetRoutes,
  },
  {
    path: '/grademarks',
    route: grademarkRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
