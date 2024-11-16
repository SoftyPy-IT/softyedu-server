import { z } from 'zod';

const bannerValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    description: z.string({ required_error: 'Description is required' }),
    folder_name: z.string({ required_error: 'Folder name is required' }),
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
const updateBannerValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }).optional(),
    description: z
      .string({ required_error: 'Description is required' })
      .optional(),
      folder_name: z
      .string({ required_error: 'Folder name is required' })
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

export const bannerValidation = {
  bannerValidationSchema,
  updateBannerValidationSchema,
};
