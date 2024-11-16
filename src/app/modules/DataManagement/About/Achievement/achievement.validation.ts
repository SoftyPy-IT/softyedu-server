import { z } from 'zod';

const achievementValidationSchema = z.object({
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

    title: z
      .string({ required_error: 'Title is required' })
      .min(1, { message: 'Title is required' }),
    description: z
      .string({ required_error: 'Description is required' })
      .min(1, { message: 'Title is required' }),
    folder_name: z
      .string({ required_error: 'Folder name is required' })
  }),
});
const updateAchievementValidationSchema = z.object({
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
    title: z.string().optional(),
    description: z
      .string({ required_error: 'Description is required' })
      .min(1, { message: 'Title is required' })
      .optional(),
      folder_name: z
      .string({ required_error: 'Folder name is required' }).optional()
  }),
});

export const achievementValidation = {
  achievementValidationSchema,
  updateAchievementValidationSchema,
};
