import { Types } from 'mongoose';
export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';
export type TUserName = {
  firstName: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  email: string;
  relation: string;
  address: string;
};

export type TClass = 5 | 6 | 7 | 8 | 9 | 10;
export type TGroup = 'Science' | 'Business Studies' | 'Humanities';
export type TBranch = 'A' | 'B' | 'C';
export type TSection = 'A' | 'B' | 'C';
export type TVersion = 'English Version' | 'Bangla Version';
export type TShift = 'Morning' | 'Evening';

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isDeleted: boolean;
  phone: number;
  nid: number;
  religion: string;
  pressent_house: string;
  pressent_postOffice: string;
  pressent_postCode: number;
  pressent_union: string;
  pressent_policeStation: string;
  pressent_district: string;
  pressent_city: string;
  permanent_house: string;
  permanent_postOffice: string;
  permanent_postCode: number;
  permanent_union: string;
  permanent_policeStation: string;
  permanent_district: string;
  permanent_city: string;
  class: TClass;
  group: TGroup;
  branch: TBranch;
  section: TSection;
  roll: number;
  admissionMonth: TMonths;
  version: TVersion;
  shift: TShift;
  academicYear: string;
  previous_school: string;
  lastExamResult: string;
};
