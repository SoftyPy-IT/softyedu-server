import { z } from 'zod';

export const createMarksheetValidationSchema = z.object({
  body: z.object({
    roll: z.number({
      required_error: 'Roll is required',
    }),
    name: z.string({
      required_error: 'Name is required',
    }),
    class: z.string({
      required_error: 'Class is required',
    }),
    group: z.string({
      required_error: 'Group is required',
    }),
    semester: z.string({
      required_error: 'Semester is required',
    }),
    session: z.string({
      required_error: 'GPA is required',
    }),
  }),
});
export const updateMarksheetValidationSchema = z.object({
  body: z.object({
    roll: z
      .number({
        required_error: 'Roll is required',
      })
      .optional(),
    name: z
      .string({
        required_error: 'Name is required',
      })
      .optional(),
    class: z
      .string({
        required_error: 'Class is required',
      })
      .optional(),
    group: z
      .string({
        required_error: 'Group is required',
      })
      .optional(),
    semester: z
      .string({
        required_error: 'Semester is required',
      })
      .optional(),
      session: z
      .string({
        required_error: 'Session is required',
      })
      .optional(),
  }),
});

export const MarksheetValidationSchema = {
  createMarksheetValidationSchema,
  updateMarksheetValidationSchema,
};
