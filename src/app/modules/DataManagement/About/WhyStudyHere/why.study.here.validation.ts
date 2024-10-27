import { z } from 'zod';

const whyStudyValidationSchema = z.object({
  body: z.object({
    mission: z
      .array(
        z.object({
          title: z.string({ required_error: 'Mission title is required' }),
          description: z.string({
            required_error: 'Mission description is required',
          }),
          image: z
            .string({ required_error: 'Mission image is required' })
            .refine(
              (val) => {
                return /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/.test(
                  val.toLowerCase(),
                );
              },
              {
                message:
                  'Invalid image format. Only .jpg, .jpeg, .png, .gif, .bmp, .svg, .webp are allowed',
              },
            ),
        }),
      )
      .min(1, { message: 'At least one short mission entry is required' })
      .optional(),
    benefits: z
      .array(
        z.object({
          title: z.string({ required_error: 'Benefits title is required' }),
          description: z.string({
            required_error: 'Benefits description is required',
          }),

          image: z
            .string({ required_error: 'Benefits image is required' })
            .refine(
              (val) => {
                return /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/.test(
                  val.toLowerCase(),
                );
              },
              {
                message:
                  'Invalid image format. Only .jpg, .jpeg, .png, .gif, .bmp, .svg, .webp are allowed',
              },
            ),
        }),
      )
      .min(1, { message: 'At least one short benefits entry is required' })
      .optional(),
  }),
});

const updateWhyStudyValidationSchema = z.object({
  body: z.object({
    mission: z
      .array(
        z.object({
          title: z.string({ required_error: 'Mission title is required' }),
          description: z.string({
            required_error: 'Benefits description is required',
          }),
          image: z
            .string({ required_error: 'Mission image is required' })
            .refine(
              (val) => {
                return /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/.test(
                  val.toLowerCase(),
                );
              },
              {
                message:
                  'Invalid image format. Only .jpg, .jpeg, .png, .gif, .bmp, .svg, .webp are allowed',
              },
            ),
        }),
      )
      .min(1, { message: 'At least one short mission entry is required' })
      .optional(),
    benefits: z
      .array(
        z.object({
          title: z.string({ required_error: 'Benefits title is required' }),
          description: z.string({
            required_error: 'Benefits description is required',
          }),
          image: z
            .string({ required_error: 'Benefits image is required' })
            .refine(
              (val) => {
                return /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/.test(
                  val.toLowerCase(),
                );
              },
              {
                message:
                  'Invalid image format. Only .jpg, .jpeg, .png, .gif, .bmp, .svg, .webp are allowed',
              },
            ),
        }),
      )
      .min(1, { message: 'At least one short benefits entry is required' })
      .optional(),
  }),
});

export const whyStudyValidation = {
  whyStudyValidationSchema,
  updateWhyStudyValidationSchema,
};
