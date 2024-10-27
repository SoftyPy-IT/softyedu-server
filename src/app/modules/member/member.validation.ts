import { z } from 'zod';

const createMemberSchema = z.object({
  nid: z.string({ required_error: 'National ID is required' }),
  card_no: z.string({ required_error: 'Library Card Number is required' }),
  admission_no: z.string({ required_error: 'Admission Number is required' }),
  name: z.string({ required_error: 'Member name is required' }),
  class: z.string({ required_error: 'Class is required' }),
  group: z.string({ required_error: 'Group is required' }),
  member_type: z.string({ required_error: 'Member type is required' }),
  gender: z.string({ required_error: 'Gender is required' }),
  roll: z.string({ required_error: 'Roll number is required' }),
  dof: z.string({ required_error: 'Date of birth is required' }),
  father_name: z.string({ required_error: "Father's name is required" }),
  phone: z.string({ required_error: 'Phone number is required' }),
});
const updateMemberSchema = z.object({
  nid: z.string({ required_error: 'National ID is required' }).optional(),
  card_no: z
    .string({ required_error: 'Library Card Number is required' })
    .optional(),
  admission_no: z
    .string({ required_error: 'Admission Number is required' })
    .optional(),
  name: z.string({ required_error: 'Member name is required' }).optional(),
  class: z.string({ required_error: 'Class is required' }).optional(),
  group: z.string({ required_error: 'Group is required' }).optional(),
  member_type: z
    .string({ required_error: 'Member type is required' })
    .optional(),
  gender: z.string({ required_error: 'Gender is required' }).optional(),
  roll: z.string({ required_error: 'Roll number is required' }).optional(),
  dof: z.string({ required_error: 'Date of birth is required' }).optional(),
  father_name: z
    .string({ required_error: "Father's name is required" })
    .optional(),
  phone: z.string({ required_error: 'Phone number is required' }).optional(),
});

export const MemberValidations = {
  createMemberSchema,
  updateMemberSchema,
};
