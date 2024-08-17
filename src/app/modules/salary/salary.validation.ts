import { z } from 'zod';
export const TMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

const createSalaryValidation = z.object({
  body: z.object({
    id: z.string().min(1, { message: 'ID is required' }),
    name: z.string().min(1, { message: 'Name is required' }),
    type: z.string().min(1, { message: 'Employee type is required' }),
    salary: z.string().min(1, { message: 'Salary is required' }),
    bonus: z.string().min(1, { message: 'Bonus is required' }),
    total: z.string().min(1, { message: 'Total is required' }),
    date: z.string().min(1, { message: 'Date is required' }),
    month: z.enum(TMonths, { required_error: 'Month is required' }),
    status: z.enum(['complet', 'pending', 'on-hold', 'cancell'], {
      required_error: 'Status is required',
    }),
  }),
});

const updateSalalryValidation = z.object({
  body: z.object({
    id: z.string().min(1, { message: 'ID is required' }).optional(),
    name: z.string().min(1, { message: 'Name is required' }).optional(),
    type: z
      .string()
      .min(1, { message: 'Employee type is required' })
      .optional(),
    salary: z.string().min(1, { message: 'Salary is required' }).optional(),
    bonus: z.string().min(1, { message: 'Bonus is required' }).optional(),
    total: z.string().min(1, { message: 'Total is required' }).optional(),
    date: z.string().min(1, { message: 'Date is required' }).optional(),
    month: z.enum(TMonths).optional(),
    status: z.enum(['complet', 'pending', 'on-hold', 'cancell']).optional(),
  }),
});

export const SalaryValidations = {
  createSalaryValidation,
  updateSalalryValidation,
};
