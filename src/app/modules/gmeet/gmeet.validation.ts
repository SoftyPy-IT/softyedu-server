import { z } from 'zod';

const parseDateString = (arg: unknown) => {
  if (typeof arg === 'string' || arg instanceof Date) {
    const date = new Date(arg);
    return isNaN(date.getTime()) ? undefined : date;
  }
  return undefined;
};

const CreateGmeetValidationSchema = z.object({
  body: z.object({
    class: z.enum(['5', '6', '7', '8', '9'], {
      required_error: 'Class is required',
    }),
    description: z.string().optional(),
    subject: z.enum(['Bangla', 'English', 'Math'], {
      required_error: 'Subject is required',
    }),
    shift: z.enum(['Morning', 'Evening'], {
      required_error: 'Shift is required',
    }),
    section: z.enum(['A', 'B', 'C'], {
      required_error: 'Section is required',
    }),
    date: z.preprocess(
      parseDateString,
      z.date({
        required_error: 'Date is required',
        invalid_type_error: 'Invalid date format',
      }),
    ),
    start_time: z.preprocess(
      parseDateString,
      z.date({
        required_error: 'Start Time is required',
        invalid_type_error: 'Invalid start time format',
      }),
    ),
    end_time: z.preprocess(
      parseDateString,
      z.date({
        required_error: 'End Time is required',
        invalid_type_error: 'Invalid end time format',
      }),
    ),
    class_duration: z.string().optional(),
    created_by: z.string({
      required_error: 'Created by is required',
    }),
    created_for: z.string({
      required_error: 'Created for is required',
    }),
    status: z.enum(['Awaited', 'Canceled', 'Finished'], {
      required_error: 'Status is required',
    }),
    gmeet_link: z
      .string()
      .url({ message: 'Invalid URL format' })
      .max(500, {
        message: 'GMeet Link cannot be more than 500 characters',
      })
      .optional(),
  }),
});

const updateGmeetValidationSchema = z.object({
  body: z.object({
    class: z
      .enum(['5', '6', '7', '8', '9'], {
        required_error: 'Class is required',
      })
      .optional(),
    description: z.string().optional(),
    subject: z
      .enum(['Bangla', 'English', 'Math'], {
        required_error: 'Subject is required',
      })
      .optional(),
    shift: z
      .enum(['Morning', 'Evening'], {
        required_error: 'Shift is required',
      })
      .optional(),
    section: z
      .enum(['A', 'B', 'C'], {
        required_error: 'Section is required',
      })
      .optional(),
    date: z
      .preprocess(
        parseDateString,
        z.date({
          required_error: 'Date is required',
          invalid_type_error: 'Invalid date format',
        }),
      )
      .optional(),
    start_time: z
      .preprocess(
        parseDateString,
        z.date({
          required_error: 'Start Time is required',
          invalid_type_error: 'Invalid start time format',
        }),
      )
      .optional(),
    end_time: z
      .preprocess(
        parseDateString,
        z.date({
          required_error: 'End Time is required',
          invalid_type_error: 'Invalid end time format',
        }),
      )
      .optional(),
    class_duration: z.string().optional(),
    created_by: z
      .string({
        required_error: 'Created by is required',
      })
      .optional(),
    created_for: z
      .string({
        required_error: 'Created for is required',
      })
      .optional(),
    status: z
      .enum(['Awaited', 'Canceled', 'Finished'], {
        required_error: 'Status is required',
      })
      .optional(),
    gmeet_link: z
      .string()
      .url({ message: 'Invalid URL format' })
      .max(500, {
        message: 'GMeet Link cannot be more than 500 characters',
      })
      .optional(),
  }),
});
export const GmeetValidationSchema = {
  CreateGmeetValidationSchema,
  updateGmeetValidationSchema,
};
