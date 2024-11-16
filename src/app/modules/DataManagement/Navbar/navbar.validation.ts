import { z } from 'zod';


const SubCategorySchema = z.object({
    category: z.string(),
    href: z.string().regex(/[a-zA-Z0-9_-]+$/, "href must start with and follow the pattern")
  })

export const navbarValidationSchema = z.object({
  body: z.object({
    category: z.string({ required_error: 'Category name is required' }),
    href: z.string().regex(/[a-zA-Z0-9_-]+$/, "href must start with and follow the pattern").optional(),
    sub_category: z.array(SubCategorySchema).optional().refine(
      (value) => !value || value.length > 0,
      {
        message: "If sub_category is provided, it cannot be empty."
      }
    )
  }),
});

export const navbarValidation = {
  navbarValidationSchema,
};
