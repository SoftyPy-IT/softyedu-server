import { z } from 'zod';

const createIncomeValidationSchema = z.object({
  body: z.object({
    category: z
      .array(z.string())
      .min(1, { message: 'Income category is required' }),
    income: z.string().min(1, { message: 'Income name is required' }),
    invoice: z.number({ required_error: 'Invoice number is required' }),
    date: z
      .string({ required_error: 'Income date is required' })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format',
      })
      .transform((val) => new Date(val)),
    amount: z.number({ required_error: 'Amount is required' }),
    image: z.string().min(1, { message: 'Invoice image is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
  }),
});
const updateIncomeValidationSchema = z.object({
  body: z.object({
    category: z
      .array(z.string())
      .min(1, { message: 'Income category is required' })
      .optional(),
    income: z
      .string()
      .min(1, { message: 'Income name is required' })
      .optional(),
    invoice: z
      .number({ required_error: 'Invoice number is required' })
      .optional(),
    date: z
      .string({ required_error: 'Income date is required' })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format',
      })
      .transform((val) => new Date(val))
      .optional(),
    amount: z.number({ required_error: 'Amount is required' }).optional(),
    image: z
      .string()
      .min(1, { message: 'Invoice image is required' })
      .optional(),
    description: z
      .string()
      .min(1, { message: 'Description is required' })
      .optional(),
  }),
});
export const IncomeValidations = {
  createIncomeValidationSchema,
  updateIncomeValidationSchema,
};
