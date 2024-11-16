import { z } from 'zod';


const featureSchema = z.object({
  title: z.string({ required_error: 'Feature title is required' }),
  description: z.string({ required_error: 'Feature description is required' }),
  folder_name: z.string({ required_error: 'Feature folder name is required' }),
  image: z
    .string({ required_error: 'Feature image is required' })
    .refine((val) => /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/.test(val.toLowerCase()), {
      message: 'Invalid image format. Only .jpg, .jpeg, .png, .gif, .bmp, .svg, .webp are allowed',
    }),
});

const schoolFeaturesValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    description: z.string({ required_error: 'Description is required' }),
    features: z
      .array(featureSchema, { required_error: 'Features are required' })
      .nonempty({ message: 'At least one feature is required' }),
  }),
});
const updateSchoolFeaturesValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }).optional(),
    description: z.string({ required_error: 'Description is required' }).optional(),
    features: z
      .array(featureSchema, { required_error: 'Features are required' }).optional()

  }),
});


 

export const schoolFeaturesValidation = {
  schoolFeaturesValidationSchema,
  updateSchoolFeaturesValidationSchema,
};
