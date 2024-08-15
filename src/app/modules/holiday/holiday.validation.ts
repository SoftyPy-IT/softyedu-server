import { z } from 'zod';

const createHolidaySchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Holiday title is required' }),
    holiday_type: z.string().min(1, { message: 'Holiday type is required' }),
    start_date: z.string().min(1, { message: 'Start date is required' }),
    end_date: z.string().min(1, { message: 'End date is required' }),
  }),
});
const updateHolidaySchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Holiday title is required' }).optional(),
    holiday_type: z.string().min(1, { message: 'Holiday type is required' }).optional(),
    start_date: z.string().min(1, { message: 'Start date is required' }).optional(),
    end_date: z.string().min(1, { message: 'End date is required' }).optional(),
  }),
});

export const HolidayValidations = {
createHolidaySchema,
updateHolidaySchema
};
