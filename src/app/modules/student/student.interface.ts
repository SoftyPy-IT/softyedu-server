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
export type TAddress = {
  house: string;
  postOffice: string;
  postCode: number;
  union: string;
  policeStation: string;
  district: string;
  city: string;
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
  presentAddress: TAddress;
  permanentAddress: TAddress;
  class: TClass;
  group: TGroup;
  branch: TBranch;
  section: TSection;
  roll: number;
  admissionMonth: TMonths;
  version: TVersion;
  shift: TShift;
  academicYear: string;
  previousSchool: string;
  lastExamResult: string;
  profile:string
};
