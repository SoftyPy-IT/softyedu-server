import { z } from 'zod';

export const createResultValidationSchema = z.object({
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
    gpa: z.string({
      required_error: 'GPA is required',
    }),
  }),
});
export const updateResultValidationSchema = z.object({
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
    gpa: z
      .string({
        required_error: 'GPA is required',
      })
      .optional(),
  }),
});

export const ResultValidationSchema = {
  createResultValidationSchema,
  updateResultValidationSchema,
};
