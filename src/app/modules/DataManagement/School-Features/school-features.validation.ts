import { z } from 'zod';

const schoolFeaturesValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    description: z.string({ required_error: 'Description is required' }),
    sub_title: z.string({ required_error: 'Sub title is required' }),
    sub_description: z.string({
      required_error: 'Sub title description is required',
    }),
    image: z.string({ required_error: 'Image is required' }).refine(
      (val) => {
        return /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/.test(val.toLowerCase());
      },
      {
        message:
          'Invalid image format. Only .jpg, .jpeg, .png, .gif, .bmp, .svg, .webp are allowed',
      },
    ),
  }),
});
const updateSchoolFeaturesValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }).optional(),
    description: z
      .string({ required_error: 'Description is required' })
      .optional(),
    sub_title: z.string({ required_error: 'Sub title is required' }).optional(),
    sub_description: z
      .string({ required_error: 'Sub title description is required' })
      .optional(),
    image: z
      .string({ required_error: 'Image is required' })
      .refine(
        (val) => {
          return /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/.test(val.toLowerCase());
        },
        {
          message:
            'Invalid image format. Only .jpg, .jpeg, .png, .gif, .bmp, .svg, .webp are allowed',
        },
      )
      .optional(),
  }),
});

export const schoolFeaturesValidation = {
  schoolFeaturesValidationSchema,
  updateSchoolFeaturesValidationSchema,
};
