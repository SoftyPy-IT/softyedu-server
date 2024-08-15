import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { HolidayValidations } from './holiday.validation';
import { HolidayControllers } from './holiday.controller';


const router = express.Router();

router.post(
  '/',
  validateRequest(HolidayValidations.createHolidaySchema),
  HolidayControllers.createHoliday,
);
router.get('/', HolidayControllers.getAllHoliday);
router.get('/:id', HolidayControllers.getSingleHoliday);
router.delete('/:id', HolidayControllers.deleteHoliday);
router.patch(
  '/:id',
  validateRequest(HolidayValidations.updateHolidaySchema),
  HolidayControllers.updateHoliday
);

export const holidayRoutes = router;
