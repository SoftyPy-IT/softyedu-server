import { z } from 'zod';

export const createExpenseValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Expense name is required' }),
    expense_by: z
      .string()
      .min(1, {
        message: 'The person or entity who made the expense is required',
      })
      .optional(),
    amount: z
      .number({ required_error: 'Expense amount is required' })
      .optional(),
      date: z
      .string({ required_error: 'Income date is required' })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format',
      })
      .transform((val) => new Date(val))
      .optional(),
  }),
});
export const updateExpenseValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Expense name is required' }).optional(),
    expense_by: z
      .string()
      .min(1, {
        message: 'The person or entity who made the expense is required',
      })
      .optional(),
    amount: z
      .number({ required_error: 'Expense amount is required' })
      .optional(),
      date: z
      .string({ required_error: 'Income date is required' })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format',
      })
      .transform((val) => new Date(val))
      .optional(),
  }),
});

export const ExpenseValidations = {
  createExpenseValidationSchema,
  updateExpenseValidationSchema,
};
