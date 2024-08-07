
import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();


router.get('/',StudentController.getAllStudent);
router.get('/:id',StudentController.getSingleStudent);
router.delete('/:id',StudentController.deleteStudent);
router.patch('/:id',StudentController.updateStudent);


export const studentRoutes = router;