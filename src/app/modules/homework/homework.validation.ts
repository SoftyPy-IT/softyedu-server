import { z } from 'zod';

const createHomeworkValidation = z.object({
  body: z.object({
    class: z.string().min(1, { message: 'Class is required' }),
    section: z.string().min(1, { message: 'Section is required' }),
    group: z.string().min(1, { message: 'Group is required' }),
    subject: z.string().min(1, { message: 'Subject is required' }),
    date: z.preprocess(
      (value) => (typeof value === 'string' || typeof value === 'number' ? new Date(value) : value),
      z.date().refine((date) => !isNaN(date.getTime()), {
        message: 'Date is required and must be a valid date',
      })
    ),
    description: z.string().min(1, { message: 'Description is required' }),
  }),
});



const updateHomeworkValidation = z.object({
  body: z.object({
    class: z.string().min(1, { message: 'Class is required' }).optional(),
    section: z.string().min(1, { message: 'Section is required' }).optional(),
    group: z.string().min(1, { message: 'Group is required' }).optional(),
    subject: z.string().min(1, { message: 'Subject is required' }).optional(),
    date: z
      .date()
      .refine((date) => !isNaN(date.getTime()), {
        message: 'Date is required and must be a valid date',
      })
      .optional(),
    description: z
      .string()
      .min(1, { message: 'Description is required' })
      .optional(),
  }),
});

export const HomeworkValidations = {
  createHomeworkValidation,
  updateHomeworkValidation,
};
