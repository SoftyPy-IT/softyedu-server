import { z } from 'zod';

const historyValidationSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: 'Title is required' })
      .min(1, { message: 'Title is required' }),
    description: z
      .string({ required_error: 'Description is required' })
      .min(1, { message: 'Description is required' }),
    vision: z
      .string({ required_error: 'Vision is required' })
      .min(1, { message: 'Vision is required' }),
    mission: z
      .string({ required_error: 'Mission is required' })
      .min(1, { message: 'Mission is required' }),
    short_history: z
      .array(
        z.object({
          year: z.number({ required_error: 'Year is required' }),
          description: z.string({
            required_error: 'Short history description is required',
          }),
        }),
      )
      .min(1, { message: 'At least one short history entry is required' }),
  }),
});
const updateHistoryValidationSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: 'Title is required' })
      .min(1, { message: 'Title is required' })
      .optional(),
    description: z
      .string({ required_error: 'Description is required' })
      .min(1, { message: 'Description is required' })
      .optional(),
    vision: z
      .string({ required_error: 'Vision is required' })
      .min(1, { message: 'Vision is required' })
      .optional(),
    mission: z
      .string({ required_error: 'Mission is required' })
      .min(1, { message: 'Mission is required' })
      .optional(),
    short_history: z
      .array(
        z.object({
          year: z.number({ required_error: 'Year is required' }),
          description: z.string({
            required_error: 'Short history description is required',
          }),
        }),
      )
      .min(1, { message: 'At least one short history entry is required' })
      .optional(),
  }),
});

export const historyValidation = {
  historyValidationSchema,
  updateHistoryValidationSchema,
};
