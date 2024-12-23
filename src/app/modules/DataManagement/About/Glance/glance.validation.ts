import { z } from 'zod';

const glanceValidationSchema = z.object({
  body: z.object({
    image: z.string({ required_error: 'Image is required' }).refine(
      (val) => {
        return /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/.test(val.toLowerCase());
      },
      {
        message:
          'Invalid image format. Only .jpg, .jpeg, .png, .gif, .bmp, .svg, .webp are allowed',
      },
    ),
    folder_name: z
      .string({ required_error: 'Folder name is required' }),

    title: z
      .string({ required_error: 'Title is required' })
      .min(1, { message: 'Title is required' }),
  }),
});
const updateGlanceValidationSchema = z.object({
  body: z.object({
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
      folder_name: z
      .string({ required_error: 'Folder name is required' }).optional(),
    title: z.string().optional(),
  }),
});

export const glanceValidation = {
  glanceValidationSchema,
  updateGlanceValidationSchema,
};
