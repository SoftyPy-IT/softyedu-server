/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from 'zod';

const userNameSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First Name is required')
    .max(20, 'Name cannot be more than 20 characters')
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),
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

const TClassEnum = z.enum(['5', '6', '7', '8', '9', '10']);
const TGroupEnum = z.enum(['Science', 'Business Studies', 'Humanities']);
const TBranchEnum = z.enum(['A', 'B', 'C']);
const TSectionEnum = z.enum(['A', 'B', 'C']);
const TVersionEnum = z.enum(['English Version', 'Bangla Version']);
const TShiftEnum = z.enum(['Morning', 'Evening']);
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

export const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20, 'Password cannot be more than 20 characters'),
    id: z.string(),
    // user: z.string().min(1, 'User id is required'),
    name: userNameSchema,
    gender: z.enum(['male', 'female', 'other']),
    dateOfBirth: z.string().optional(),
    email: z.string().email('Invalid email format'),
    contactNo: z.string().min(1, 'Contact number is required'),
    emergencyContactNo: z.string().min(1, 'Emergency contact number is required'),
    bloodGroup: z
      .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
      .optional(),
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    // profileImg: z.string().optional(),
    isDeleted: z.boolean().default(false),
    phone: z.number(),
    nid: z.number(),
    religion: z.string().min(1, 'Religion is required'),
    pressent_house: z.string().min(1, 'Present house information is required'),
    pressent_postOffice: z.string().min(1, 'Present post office information is required'),
    pressent_postCode: z.number().min(1, 'Present post code is required'),
    pressent_union: z.string().min(1, 'Present union is required'),
    pressent_policeStation: z.string().min(1, 'Present police station is required'),
    pressent_district: z.string().min(1, 'Present district is required'),
    pressent_city: z.string().min(1, 'Present city is required'),
    permanent_house: z.string().min(1, 'Permanent house information is required'),
    permanent_postOffice: z.string().min(1, 'Permanent post office information is required'),
    permanent_postCode: z.number().min(1, 'Permanent post code is required'),
    permanent_union: z.string().min(1, 'Permanent union is required'),
    permanent_policeStation: z.string().min(1, 'Permanent police station is required'),
    permanent_district: z.string().min(1, 'Permanent district is required'),
    permanent_city: z.string().min(1, 'Permanent city is required'),
    class: TClassEnum,
    group: TGroupEnum,
    branch: TBranchEnum,
    section: TSectionEnum,
    roll: z.number().min(1, 'Roll number is required'),
    admissionMonth: TMonthsEnum,
    version: TVersionEnum,
    shift: TShiftEnum,
    academicYear: z.string().min(1, 'Academic year is required'),
    previous_school: z.string().min(1, 'Previous school is required'),
    lastExamResult: z.string().min(1, 'Last exam result is required'),
  }),
});

const updateUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

const updateGuardianValidationSchema = z.object({
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherContactNo: z.string().optional(),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().optional(),
});

const updateLocalGuardianValidationSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional(),
});

export const updateStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: updateUserNameValidationSchema.optional(),
      gender: z.enum(['male', 'female', 'other']).optional(),
      dateOfBirth: z.string().optional(),
      email: z.string().email().optional(),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      profileImg: z.string().optional(),
      isDeleted: z.boolean().optional(),
      phone: z.number().optional(),
      nid: z.number().optional(),
      religion: z.string().optional(),
      pressent_house: z.string().optional(),
      pressent_postOffice: z.string().optional(),
      pressent_postCode: z.number().optional(),
      pressent_union: z.string().optional(),
      pressent_policeStation: z.string().optional(),
      pressent_district: z.string().optional(),
      pressent_city: z.string().optional(),
      permanent_house: z.string().optional(),
      permanent_postOffice: z.string().optional(),
      permanent_postCode: z.number().optional(),
      permanent_union: z.string().optional(),
      permanent_policeStation: z.string().optional(),
      permanent_district: z.string().optional(),
      permanent_city: z.string().optional(),
      class: TClassEnum.optional(),
      group: TGroupEnum.optional(),
      branch: TBranchEnum.optional(),
      section: TSectionEnum.optional(),
      roll: z.number().optional(),
      admissionMonth: TMonthsEnum.optional(),
      version: TVersionEnum.optional(),
      shift: TShiftEnum.optional(),
      academicYear: z.string().optional(),
      previous_school: z.string().optional(),
      lastExamResult: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
