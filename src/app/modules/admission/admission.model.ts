import { model, Schema } from 'mongoose';
import {
  TAddress,
  TAdmission,
  TGuardian,
  TLocalGuardian,
  TUserName,
} from './admission.interface';
import { TMonths } from '../student/student.constant';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxlength: [20, 'Name cannot be more than 20 characters'],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    maxlength: [20, 'Name cannot be more than 20 characters'],
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, 'Father Name is required'],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Father occupation is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father Contact No is required'],
  },
  motherName: {
    type: String,
    required: [true, 'Mother Name is required'],
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother Contact No is required'],
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  occupation: {
    type: String,
    required: [true, 'Occupation is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  relation: {
    type: String,
    required: [true, 'Relation is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
});

const addessSchema = new Schema<TAddress>({
  house: {
    type: String,
    required: [true, 'Present house is required'],
  },
  postOffice: {
    type: String,
    required: [true, 'Present post office is required'],
  },
  postCode: {
    type: Number,
    required: [true, 'Present post code is required'],
  },
  union: {
    type: String,
    required: [true, 'Present union is required'],
  },
  policeStation: {
    type: String,
    required: [true, 'Present police station is required'],
  },
  district: {
    type: String,
    required: [true, 'Present district is required'],
  },
  city: {
    type: String,
    required: [true, 'Present city is required'],
  },
});

const admissionSchema = new Schema<TAdmission>(
  {
    id: {
      type: String,
      required: [true, 'ID is required'],
      unique: true,
    },

    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    name: {
      type: userNameSchema,
      required: [true, 'Name is required'],
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: '{VALUE} is not a valid gender',
      },
      required: [true, 'Gender is required'],
    },
    dob: { type: String },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    contactNo: {
      type: String,
      required: [true, 'Contact number is required'],
    },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency contact number is required'],
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not a valid blood group',
      },
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian information is required'],
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, 'Local guardian information is required'],
    },
    profileImg: { type: String },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: Number,
      required: [true, 'Phone number is required'],
    },
    nid: {
      type: Number,
      required: [true, 'National ID is required'],
    },
    religion: {
      type: String,
      required: [true, 'Religion is required'],
    },
    presentAddress: {
      type: addessSchema,
      required: [true, 'Present address is required'],
    },
    permanentAddress: {
      type: addessSchema,
      required: [true, 'Permanent address is required'],
    },
    class: {
      type: Number,
      enum: [5, 6, 7, 8, 9, 10],
      required: [true, 'Class is required'],
    },
    group: {
      type: String,
      enum: ['Science', 'Business Studies', 'Humanities'],
      required: [true, 'Group is required'],
    },
    branch: {
      type: String,
      enum: ['A', 'B', 'C'],
      required: [true, 'Branch is required'],
    },
    section: {
      type: String,
      enum: ['A', 'B', 'C'],
      required: [true, 'Section is required'],
    },
    roll: {
      type: Number,
      required: [true, 'Roll number is required'],
    },
    admissionMonth: {
      type: String,
      enum: TMonths,
      required: [true, 'Admission month is required'],
    },
    version: {
      type: String,
      enum: ['English Version', 'Bangla Version'],
      required: [true, 'Version is required'],
    },
    shift: {
      type: String,
      enum: ['Morning', 'Evening'],
      required: [true, 'Shift is required'],
    },
    academicYear: {  
      type: String,
      required: [true, 'Academic year is required'],
    },
    previousSchool: {
      type: String,
      required: [true, 'Previous school is required'],
    },
    lastExamResult: {
      type: String,
      required: [true, 'Last exam result is required'],
    },
    academic_year: {
      type: Number,
    },
    payment_method: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

admissionSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.lastName}`;
});

export const Admission = model<TAdmission>('Admission', admissionSchema);
