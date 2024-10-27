import express from 'express';
import { validateRequest } from '../../../../../utils/validateRequest';

import { actionRequestLimiter } from '../../../../middlewares/requestLimit';
import { eventsValidation } from './events.validation';
import { eventsController } from './events.controller';

const router = express.Router();

router
  .route('/')
  .post(
    // authorization(USER_ROLE.super_admin),
    actionRequestLimiter,
    validateRequest(eventsValidation.eventsValidationSchema),
    eventsController.createEvents,
  )
  .get(eventsController.getAllEvents);

router
  .route('/:id')
  .put(
    // authorization(USER_ROLE.super_admin),
    validateRequest(eventsValidation.updateEventsValidationSchema),
    eventsController.updateEvents,
  )
  .delete(eventsController.deleteEvents);

export const EventsRoutes = router;
