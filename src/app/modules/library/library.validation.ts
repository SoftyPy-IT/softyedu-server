import { z } from 'zod';

const createLibraryValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Book title is required' }),
    subject: z.string().min(1, { message: 'Subject is required' }),
    department: z.string().min(1, { message: 'Department is required' }),
    type: z.string().min(1, { message: 'Type of the book is required' }),
    status: z.string().min(1, { message: 'Status is required' }),
  }),
});
const updateLibraryValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Book title is required' }).optional(),
    subject: z.string().min(1, { message: 'Subject is required' }).optional(),
    department: z.string().min(1, { message: 'Department is required' }).optional(),
    type: z.string().min(1, { message: 'Type of the book is required' }).optional(),
    status: z.string().min(1, { message: 'Status is required' }).optional(),
  }),
});

export const LibraryValidations = {
createLibraryValidationSchema,
updateLibraryValidationSchema
};
