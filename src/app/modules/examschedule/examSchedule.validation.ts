import { z } from 'zod';
import { roomNo, subjectName } from './examSchedule.constant';

export const createExamScheduleSchema = z.object({
  body: z.object({
    subject: z.enum(subjectName, {
      required_error: 'Subject is required',
    }),
    date: z
      .string({
        required_error: 'Date is required',
      })
      .nullable(),
    time: z
      .string({
        required_error: 'Time is required',
      })
      .nullable(),
    duration: z.string({
      required_error: 'Duration is required',
    }),
    room_no: z.enum(roomNo, {
      required_error: 'Room number is required',
    }),
  }),
});

export const updateExamScheduleSchema = z.object({
  body: z.object({
    subject: z.enum(subjectName).optional(),
    date: z.string().optional(),
    time: z.string().optional(),
    duration: z.string().optional(),
    room_no: z.enum(roomNo).optional(),
  }),
});

export const ExamScheduleValidations = {
  createExamScheduleSchema,
  updateExamScheduleSchema,
};
