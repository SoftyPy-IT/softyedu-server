import { z } from 'zod';

export const createGradeMarkValidationSchema = z.object({
  body: z.object({
    exam_type: z.string({
      required_error: 'Exam Type is required',
    }),
    grade_name: z.string({
      required_error: 'Grade Name is required',
    }),
    percent: z.string({
      required_error: 'Percent is required',
    }),
    grade_point: z.string({
      required_error: 'Grade Point is required',
    }),
  }),
});
export const updateGradeMarkValidationSchema = z.object({
  body: z.object({
    exam_type: z
      .string({
        required_error: 'Exam Type is required',
      })
      .optional(),
    grade_name: z
      .string({
        required_error: 'Grade Name is required',
      })
      .optional(),
    percent: z
      .string({
        required_error: 'Percent is required',
      })
      .optional(),
    grade_point: z
      .string({
        required_error: 'Grade Point is required',
      })
      .optional(),
  }),
});

export const GradeMarkValidations = {
  createGradeMarkValidationSchema,
  updateGradeMarkValidationSchema,
};
