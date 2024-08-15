import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { HomeworkValidations } from './homework.validation';
import { HomeworkControllers } from './homework.controller';



const router = express.Router();

router.post(
  '/',
  validateRequest(HomeworkValidations.createHomeworkValidation),
  HomeworkControllers.createHomework,
);
router.get('/', HomeworkControllers.getAllHomework);
router.get('/:id', HomeworkControllers.getSingleHomework);
router.delete('/:id', HomeworkControllers.deleteHomework);
router.patch(
  '/:id',
  validateRequest(HomeworkValidations.updateHomeworkValidation),
  HomeworkControllers.updateHomework
);

export const homeworkRoutes = router;
