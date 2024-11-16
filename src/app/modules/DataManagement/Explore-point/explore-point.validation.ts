import { z } from 'zod';

const explorePointValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    description: z.string({ required_error: 'Description is required' }),
    image: z.array(
      z.string({ required_error: 'Image is required' }).refine(
        (val) => {
          return /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/.test(val.toLowerCase());
        },
        {
          message:
            'Invalid image format. Only .jpg, .jpeg, .png, .gif, .bmp, .svg, .webp are allowed',
        },
      ),
    ),
    folder_name: z
      .string({ required_error: 'Folder name is required' })
  }),
});
const updateExplorePointValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }).optional(),
    description: z
      .string({ required_error: 'Description is required' })
      .optional(),
    image: z
      .array(
        z.string({ required_error: 'Image is required' }).refine(
          (val) => {
            return /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/.test(val.toLowerCase());
          },
          {
            message:
              'Invalid image format. Only .jpg, .jpeg, .png, .gif, .bmp, .svg, .webp are allowed',
          },
        ),
      )
      .optional(),
    folder_name: z
      .string({ required_error: 'Folder name is required' }).optional()
  }),
});

export const explorePointValidation = {
  explorePointValidationSchema,
  updateExplorePointValidationSchema,
};
