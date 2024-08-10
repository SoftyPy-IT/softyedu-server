import { z } from 'zod';

const userNameSchema = z.object({
  first_name: z
    .string()
    .min(1, 'First Name is required')
    .max(20, 'Name cannot be more than 20 characters'),
  last_name: z
    .string()
    .min(1, 'Last Name is required')
    .max(20, 'Name cannot be more than 20 characters'),
});

const genderEnum = z.enum(['male', 'female', 'other']);
const shiftEnum = z.enum(['Morning', 'Evening']);

const socialLinkSchema = z.object({
  facebook: z
    .string()
    .url('Invalid URL for Facebook link')
    .min(1, 'Facebook link is required'),
  twitter: z
    .string()
    .url('Invalid URL for Twitter link')
    .min(1, 'Twitter link is required'),
  linkedin: z
    .string()
    .url('Invalid URL for LinkedIn link')
    .min(1, 'LinkedIn link is required'),
  website: z
    .string()
    .url('Invalid URL for Website link')
    .min(1, 'Website link is required'),
});

const addressSchema = z.object({
  village: z.string().min(1, 'Village is required'),
  post_office: z.string().min(1, 'Post office is required'),
  post_code: z.string().min(1, 'Post code is required'),
  union_ward: z.string().min(1, 'Union/Ward is required'),
  police_station: z.string().min(1, 'Police station is required'),
  district: z.string().min(1, 'District is required'),
  city: z.string().min(1, 'City is required'),
});

const createTeacherValidationSchema = z.object({
  body: z.object({
    id: z.string().optional(),
    name: userNameSchema,
    email: z.string().email('Invalid email format').min(1, 'Email is required'),
    phone: z.string().min(1, 'Phone number is required'),
    gender: genderEnum,
    date_of_birth: z.string().optional(),
    nid: z.string().min(1, 'National ID is required'),
    social_links: socialLinkSchema,
    present_address: addressSchema,
    permanent_address: addressSchema,
    university: z.string().min(1, 'University is required'),
    degree: z.string().min(1, 'Degree is required'),
    start_date: z.string().min(1, 'Start date is required'),
    end_date: z.string().min(1, 'End date is required'),
    subject: z.string().min(1, 'Subject is required'),
    department: z.string().min(1, 'Department is required'),
    designation: z.string().min(1, 'Designation is required'),
    branch: z.string().min(1, 'Branch is required'),
    shift: shiftEnum,
    joining_date: z.string().min(1, 'Joining date is required'),
    prev_institution_name: z
      .string()
      .min(1, 'Previous institution name is required'),
    teacher_details: z.string().min(1, 'Teacher details are required'),
    profileImg: z.string().optional(),
  }),
});

const updateUserNameSchema = z.object({
  first_name: z
    .string()
    .min(1, 'First Name is required')
    .max(20, 'Name cannot be more than 20 characters')
    .optional(),
  last_name: z
    .string()
    .min(1, 'Last Name is required')
    .max(20, 'Name cannot be more than 20 characters')
    .optional(),
});

const updateGenderEnum = z.enum(['male', 'female', 'other']).optional();
const updateShiftEnum = z.enum(['Morning', 'Evening']).optional();

const updateSocialLinkSchema = z.object({
  facebook: z
    .string()
    .url('Invalid URL for Facebook link')
    .min(1, 'Facebook link is required')
    .optional(),
  twitter: z
    .string()
    .url('Invalid URL for Twitter link')
    .min(1, 'Twitter link is required')
    .optional(),
  linkedin: z
    .string()
    .url('Invalid URL for LinkedIn link')
    .min(1, 'LinkedIn link is required')
    .optional(),
  website: z
    .string()
    .url('Invalid URL for Website link')
    .min(1, 'Website link is required')
    .optional(),
});

const updateAddressSchema = z.object({
  village: z.string().min(1, 'Village is required').optional(),
  post_office: z.string().min(1, 'Post office is required').optional(),
  post_code: z.string().min(1, 'Post code is required').optional(),
  union_ward: z.string().min(1, 'Union/Ward is required').optional(),
  police_station: z.string().min(1, 'Police station is required').optional(),
  district: z.string().min(1, 'District is required').optional(),
  city: z.string().min(1, 'City is required').optional(),
});
const updateTeacherValidationSchema = z.object({
  body: z.object({
    id: z.string().optional(),
    name: updateUserNameSchema.optional(),
    email: z.string().email('Invalid email format').optional(),
    phone: z.string().optional(),
    gender: updateGenderEnum,
    date_of_birth: z.string().optional(),
    nid: z.string().optional(),
    social_links: updateSocialLinkSchema.optional(),
    present_address: updateAddressSchema.optional(),
    permanent_address: updateAddressSchema.optional(),
    university: z.string().optional(),
    degree: z.string().optional(),
    start_date: z.string().optional(),
    end_date: z.string().optional(),
    subject: z.string().optional(),
    department: z.string().optional(),
    designation: z.string().optional(),
    branch: z.string().optional(),
    shift: updateShiftEnum,
    joining_date: z.string().optional(),
    prev_institution_name: z.string().optional(),
    teacher_details: z.string().optional(),
    profileImg: z.string().optional(),
  }),
});

export const teacherValidations = {
  createTeacherValidationSchema,
  updateTeacherValidationSchema,
};
