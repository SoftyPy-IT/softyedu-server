import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { GradeMarkValidations } from './grademarks.validation';
import { GrademarkControllers } from './grademarks.controller';


const router = express.Router();

router.post(
  '/',
  validateRequest(GradeMarkValidations.createGradeMarkValidationSchema),
  GrademarkControllers.createGrademark,
);
router.get('/', GrademarkControllers.getAllGrademark);
router.get('/:id', GrademarkControllers.getSingleGrademark);
router.delete('/:id', GrademarkControllers.deleteGrademark);
router.patch(
  '/:id',
  validateRequest(GradeMarkValidations.updateGradeMarkValidationSchema),
  GrademarkControllers.updateGrademark,
);

export const grademarkRoutes = router;
