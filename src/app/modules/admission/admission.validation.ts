import { z } from 'zod';

const userNameSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First Name is required')
    .max(20, 'Name cannot be more than 20 characters'),
  lastName: z
    .string()
    .min(1, 'Last Name is required')
    .max(20, 'Name cannot be more than 20 characters'),
});

const guardianSchema = z.object({
  fatherName: z.string().min(1, 'Father Name is required'),
  fatherOccupation: z.string().min(1, 'Father occupation is required'),
  fatherContactNo: z.string().min(1, 'Father Contact No is required'),
  motherName: z.string().min(1, 'Mother Name is required'),
  motherOccupation: z.string().min(1, 'Mother occupation is required'),
  motherContactNo: z.string().min(1, 'Mother Contact No is required'),
});

const localGuardianSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  occupation: z.string().min(1, 'Occupation is required'),
  contactNo: z.string().min(1, 'Contact number is required'),
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  relation: z.string().min(1, 'Relation is required'),
  address: z.string().min(1, 'Address is required'),
});

const addressSchema = z.object({
  house: z.string().min(1, 'House is required'),
  postOffice: z.string().min(1, 'Post office is required'),
  postCode: z.number().min(1, 'Post code is required'),
  union: z.string().min(1, 'Union is required'),
  policeStation: z.string().min(1, 'Police station is required'),
  district: z.string().min(1, 'District is required'),
  city: z.string().min(1, 'City is required'),
});

const TMonthsEnum = z.enum([
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]);
const createAdmissionValidationSchema = z.object({
  body: z.object({
    password: z.string().min(1, 'Password is required'),
    id: z.string().min(1, 'ID is required'),
    name: userNameSchema,
    gender: z.enum(['male', 'female', 'other']),
    dateOfBirth: z.string().optional(),
    email: z.string().email('Invalid email format').min(1, 'Email is required'),
    contactNo: z.string().min(1, 'Contact number is required'),
    emergencyContactNo: z
      .string()
      .min(1, 'Emergency contact number is required'),
    bloodGroup: z
      .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
      .optional(),
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImg: z.string().optional(),
    isDeleted: z.boolean().default(false),
    phone: z.number().min(1, 'Phone number is required'),
    nid: z.number().min(1, 'National ID is required'),
    religion: z.string().min(1, 'Religion is required'),
    presentAddress: addressSchema,
    permanentAddress: addressSchema,
    class: z.enum(['5', '6', '7', '8', '9', '10']),
    group: z.enum(['Science', 'Business Studies', 'Humanities']),
    branch: z.enum(['A', 'B', 'C']),
    section: z.enum(['A', 'B', 'C']),
    roll: z.number().min(1, 'Roll number is required'),
    admissionMonth: TMonthsEnum,
    version: z.enum(['English Version', 'Bangla Version']),
    shift: z.enum(['Morning', 'Evening']),
    academicYear: z.string().min(1, 'Academic year is required'),
    previousSchool: z.string().min(1, 'Previous school is required'),
    lastExamResult: z.string().min(1, 'Last exam result is required'),
    academic_year: z.number().min(2, 'Academic year is required'),
    payment_method: z.string().min(1, 'Payment method is required'),
  }),
});

const updateUserNameSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First Name is required')
    .max(20, 'Name cannot be more than 20 characters')
    .optional(),
  lastName: z
    .string()
    .min(1, 'Last Name is required')
    .max(20, 'Name cannot be more than 20 characters')
    .optional(),
});
const updateGuardianSchema = z.object({
  fatherName: z.string().min(1, 'Father Name is required').optional(),
  fatherOccupation: z
    .string()
    .min(1, 'Father occupation is required')
    .optional(),
  fatherContactNo: z
    .string()
    .min(1, 'Father Contact No is required')
    .optional(),
  motherName: z.string().min(1, 'Mother Name is required').optional(),
  motherOccupation: z
    .string()
    .min(1, 'Mother occupation is required')
    .optional(),
  motherContactNo: z
    .string()
    .min(1, 'Mother Contact No is required')
    .optional(),
});

const updateLocalGuardianSchema = z.object({
  name: z.string().min(1, 'Name is required').optional(),
  occupation: z.string().min(1, 'Occupation is required').optional(),
  contactNo: z.string().min(1, 'Contact number is required').optional(),
  email: z
    .string()
    .email('Invalid email format')
    .min(1, 'Email is required')
    .optional(),
  relation: z.string().min(1, 'Relation is required').optional(),
  address: z.string().min(1, 'Address is required').optional(),
});

const updateAddressSchema = z.object({
  house: z.string().min(1, 'House is required').optional(),
  postOffice: z.string().min(1, 'Post office is required').optional(),
  postCode: z.number().min(1, 'Post code is required').optional(),
  union: z.string().min(1, 'Union is required').optional(),
  policeStation: z.string().min(1, 'Police station is required').optional(),
  district: z.string().min(1, 'District is required').optional(),
  city: z.string().min(1, 'City is required').optional(),
});

const updateTMonthsEnum = z.enum([
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]);

const updateAdmissionValidationSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    id: z.string().optional(),
    name: updateUserNameSchema.optional(),
    gender: z.enum(['male', 'female', 'other']).optional(),
    dateOfBirth: z.string().optional(),
    email: z.string().email('Invalid email format').optional(),
    contactNo: z.string().optional(),
    emergencyContactNo: z.string().optional(),
    bloodGroup: z
      .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
      .optional(),
    guardian: updateGuardianSchema.optional(),
    localGuardian: updateLocalGuardianSchema.optional(),
    profileImg: z.string().optional(),
    isDeleted: z.boolean().optional(),
    phone: z.number().optional(),
    nid: z.number().optional(),
    religion: z.string().optional(),
    presentAddress: updateAddressSchema.optional(),
    permanentAddress: updateAddressSchema.optional(),
    class: z.enum(['5', '6', '7', '8', '9', '10']).optional(),
    group: z.enum(['Science', 'Business Studies', 'Humanities']).optional(),
    branch: z.enum(['A', 'B', 'C']).optional(),
    section: z.enum(['A', 'B', 'C']).optional(),
    roll: z.number().optional(),
    admissionMonth: updateTMonthsEnum.optional(),
    version: z.enum(['English Version', 'Bangla Version']).optional(),
    shift: z.enum(['Morning', 'Evening']).optional(),
    academicYear: z.string().optional(),
    previousSchool: z.string().optional(),
    lastExamResult: z.string().optional(),
    academic_year: z.number().optional(),
    payment_method: z.string().optional(),
  }),
});

export const admissionValidations = {
  createAdmissionValidationSchema,
  updateAdmissionValidationSchema,
};
