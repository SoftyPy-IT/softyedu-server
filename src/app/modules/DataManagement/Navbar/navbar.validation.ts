import { z } from 'zod';


const SubCategorySchema = z.object({
    category: z.string(),
    href: z.string().trim().regex(/[a-zA-Z0-9_-]+$/, "Href must start with and follow the pattern")
  })

const navbarValidationSchema = z.object({
  body: z.object({
    category: z.string({ required_error: 'Category name is required' }),
    href: z.string().trim().regex(/[a-zA-Z0-9_-]+$/, "Href must start with and follow the pattern").optional(),
    sub_category: z.array(SubCategorySchema).optional().default([]),
  }),
});
const updateNavbarValidationSchema = z.object({
  body: z.object({
    category: z.string({ required_error: 'Category name is required' }).optional(),
    href: z.string().trim().regex(/[a-zA-Z0-9_-]+$/, "Href must start with and follow the pattern").optional(),
    sub_category: z.array(SubCategorySchema).optional().default([]),
  }),
});

export const navbarValidation = {
  navbarValidationSchema,
  updateNavbarValidationSchema
};
