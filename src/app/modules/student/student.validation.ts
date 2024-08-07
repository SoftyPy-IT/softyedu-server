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
const createStudentValidationSchema = z.object({
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
  }),
});

// Exporting for use
export const studentValidations = {
  createStudentValidationSchema,
};
