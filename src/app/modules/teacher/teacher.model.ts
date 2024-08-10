import { model, Schema } from 'mongoose';
import { TTeacher, TSocialLink, TAddress } from './teacher.interface';

const socialLinkSchema = new Schema<TSocialLink>({
  facebook: {
    type: String,
    required: [true, 'Facebook link is required'],
  },
  twitter: {
    type: String,
    required: [true, 'Twitter link is required'],
  },
  linkedin: {
    type: String,
    required: [true, 'LinkedIn link is required'],
  },
  website: {
    type: String,
    required: [true, 'Website link is required'],
  },
});

const addressSchema = new Schema<TAddress>({
  village: {
    type: String,
    required: [true, 'Village is required'],
  },
  post_office: {
    type: String,
    required: [true, 'Post office is required'],
  },
  post_code: {
    type: String,
    required: [true, 'Post code is required'],
  },
  union_ward: {
    type: String,
    required: [true, 'Union/Ward is required'],
  },
  police_station: {
    type: String,
    required: [true, 'Police station is required'],
  },
  district: {
    type: String,
    required: [true, 'District is required'],
  },
  city: {
    type: String,
    required: [true, 'City is required'],
  },
});

const teacherSchema = new Schema<TTeacher>(
  {
    first_name: {
      type: String,
      required: [true, 'First name is required'],
    },
    last_name: {
      type: String,
      required: [true, 'Last name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: [true, 'Gender is required'],
    },
    date_of_birth: {
      type: String,
    },
    nid: {
      type: String,
      required: [true, 'National ID is required'],
    },
    social_links: {
      type: socialLinkSchema,
      required: [true, 'Social links are required'],
    },
    present_address: {
      type: addressSchema,
      required: [true, 'Present address is required'],
    },
    permanent_address: {
      type: addressSchema,
      required: [true, 'Permanent address is required'],
    },
    university: {
      type: String,
      required: [true, 'University is required'],
    },
    degree: {
      type: String,
      required: [true, 'Degree is required'],
    },
    start_date: {
      type: String,
      required: [true, 'Start date is required'],
    },
    end_date: {
      type: String,
      required: [true, 'End date is required'],
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
    },
    department: {
      type: String,
      required: [true, 'Department is required'],
    },
    designation: {
      type: String,
      required: [true, 'Designation is required'],
    },
    branch: {
      type: String,
      required: [true, 'Branch is required'],
    },
    shift: {
      type: String,
      required: [true, 'Shift is required'],
    },
    joining_date: {
      type: String,
      required: [true, 'Joining date is required'],
    },
    prev_institution_name: {
      type: String,
      required: [true, 'Previous institution name is required'],
    },
    teacher_details: {
      type: String,
      required: [true, 'Teacher details are required'],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

teacherSchema.virtual('fullName').get(function () {
  return `${this.first_name} ${this.last_name}`;
});

export const Teacher = model<TTeacher>('Teacher', teacherSchema);