import { z } from 'zod';

export const createExamRoutinValidation = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Exam name is required' }),
    class: z.string().min(1, { message: 'Class is required' }),
    subject: z.string().min(1, { message: 'Subject is required' }),
    day: z.string().min(1, { message: 'Day is required' }),
    date: z.union([z.string(), z.date()]).refine(
      (value) => {
        const date = new Date(value);
        return !isNaN(date.getTime());
      },
      { message: 'Date is required and must be a valid date' },
    ),
    time: z.union([z.string(), z.date()]).refine(
      (value) => {
        const time = new Date(value);
        return !isNaN(time.getTime());
      },
      { message: 'Time is required and must be a valid time' },
    ),
    isDeleted: z.boolean().optional().default(false),
  }),
});
export const updateExamRoutinValidation = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Exam name is required' }).optional(),
    class: z.string().min(1, { message: 'Class is required' }).optional(),
    subject: z.string().min(1, { message: 'Subject is required' }).optional(),
    day: z.string().min(1, { message: 'Day is required' }).optional(),
    date: z.union([z.string(), z.date()]).refine(
      (value) => {
        const date = new Date(value);
        return !isNaN(date.getTime());
      },
      { message: 'Date is required and must be a valid date' },
    ).optional(),
    time: z.union([z.string(), z.date()]).refine(
      (value) => {
        const time = new Date(value);
        return !isNaN(time.getTime());
      },
      { message: 'Time is required and must be a valid time' },
    ).optional(),
    isDeleted: z.boolean().optional().default(false).optional(),
  }),
});
export const ExamRoutinsValidaions = {
  createExamRoutinValidation,
  updateExamRoutinValidation,
};
