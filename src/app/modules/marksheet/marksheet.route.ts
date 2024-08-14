import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { MarksheetValidationSchema } from './marksheet.validation';
import { MarksheetControllers } from './marksheet.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(MarksheetValidationSchema.createMarksheetValidationSchema),
  MarksheetControllers.createMarksheet,
);
router.get('/', MarksheetControllers.getAllMarksheet);
router.get('/:id', MarksheetControllers.getSingleMarksheet);
router.delete('/:id', MarksheetControllers.deleteMarksheet);
router.patch(
  '/:id',
  validateRequest(MarksheetValidationSchema.updateMarksheetValidationSchema),
  MarksheetControllers.updateMarksheet,
);

export const marksheetRoutes = router;
