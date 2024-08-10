
import express from 'express';
import { StudentController } from './student.controller';
import { validateRequest } from '../../../utils/validateRequest';
import { studentValidations } from './student.validation';

const router = express.Router();


router.get('/',StudentController.getAllStudent);
router.get('/:id',StudentController.getSingleStudent);
router.delete('/:id',StudentController.deleteStudent);
router.patch('/:id',validateRequest(studentValidations.updateStudentValidationSchema), StudentController.updateStudent);


export const studentRoutes = router;