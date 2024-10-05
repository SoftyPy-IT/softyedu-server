import express from 'express';
import { validateRequest } from '../../../../../utils/validateRequest';
import { historyValidation } from './history.validation';
import { historyController } from './history.controller';
import { actionRequestLimiter } from '../../../../middlewares/requestLimit';

const router = express.Router();

router
  .route('/')
  .post(
    // authorization(USER_ROLE.super_admin),
    actionRequestLimiter,
    validateRequest(historyValidation.historyValidationSchema),
    historyController.createHistory,
  )
  .get(historyController.getAllHistories);

router
  .route('/:id')
  .put(
    // authorization(USER_ROLE.super_admin),
    validateRequest(historyValidation.updateHistoryValidationSchema),
    historyController.updateHistory,
  )
  .delete(historyController.deleteHistory);

export const HistoryRoutes = router;
