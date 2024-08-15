
import { z } from 'zod';

const createExamValidation = z.object({
  body: z.object({
    name: z.string({required_error:'Exame name is requried'})
  }),
});

const updateExamValidation = z.object({
    body: z.object({
        name: z.string({required_error:'Exame name is requried'}).optional()
    }),
  });
  
  export const ExamValidations = {
    createExamValidation,
    updateExamValidation,
  };
  