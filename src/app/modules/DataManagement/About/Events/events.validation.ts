import { z } from 'zod';

const dateFormatRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/;

const allowedExtensions = /\.(jpg|jpeg|png|pdf|doc|docx|xls|xlsx)$/i;

const eventsValidationSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: 'Title is required' })
      .min(1, { message: 'Title must be at least 1 character long' }),

    date: z
      .string({ required_error: 'Date is required' })
      .regex(dateFormatRegex, {
        message: 'Date must be in the format DD-MM-YYYY',
      })
      .transform((dateStr) => {
        const [day, month, year] = dateStr.split('-').map(Number);
        return new Date(year, month - 1, day);
      }),

    description: z
      .string({ required_error: 'Description is required' })
      .min(1, { message: 'Description must be at least 1 character long' }),

    image: z
      .string({ required_error: 'File is required' })
      .min(1, { message: 'File path cannot be empty' })
      .regex(allowedExtensions, {
        message:
          'File must be a valid type (jpg, jpeg, png, pdf, doc, docx, xls, xlsx)',
      }),
      folder_name: z
      .string({ required_error: 'Folder name is required' })
  }),
});

const updateEventsValidationSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: 'Title is required' })
      .min(1, { message: 'Title must be at least 1 character long' })
      .optional(),

    date: z
      .string({ required_error: 'Date is required' })
      .regex(dateFormatRegex, {
        message: 'Date must be in the format DD-MM-YYYY',
      })
      .transform((dateStr) => {
        const [day, month, year] = dateStr.split('-').map(Number);
        return new Date(year, month - 1, day);
      })
      .optional(),

    description: z
      .string({ required_error: 'Description is required' })
      .min(1, { message: 'Description must be at least 1 character long' })
      .optional(),

    image: z
      .string({ required_error: 'File is required' })
      .min(1, { message: 'File path cannot be empty' })
      .regex(allowedExtensions, {
        message:
          'File must be a valid type (jpg, jpeg, png, pdf, doc, docx, xls, xlsx)',
      })
      .optional(),
      folder_name: z
      .string({ required_error: 'Folder name is required' }).optional()
  }),
});

export const eventsValidation = {
  eventsValidationSchema,
  updateEventsValidationSchema,
};
