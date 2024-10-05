import { z } from 'zod';

export const navbarValidationSchema = z.object({
  body: z.object({
    category: z.string({ required_error: 'Category name is required' }),
    sub_category: z
      .array(z.string({ required_error: 'Sub category name is required' }))
      .min(1, 'At least one sub-category is required'),
  }),
});

export const navbarValidation = {
  navbarValidationSchema,
};
