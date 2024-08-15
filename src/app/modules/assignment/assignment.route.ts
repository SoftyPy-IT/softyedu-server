import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { AssignmentValidations } from './assignment.validation';
import { AssignmentControllers } from './assignment.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(AssignmentValidations.createAssignmentValidation),
  AssignmentControllers.createAssignment,
);
router.get('/', AssignmentControllers.getAlleAssignment);
router.get('/:id', AssignmentControllers.getSingleAssignment);
router.delete('/:id', AssignmentControllers.deleteAssignment);
router.patch(
  '/:id',
  validateRequest(AssignmentValidations.updateAssignmentValidation),
  AssignmentControllers.updateAssignment,
);

export const assignmentRoutes = router;
