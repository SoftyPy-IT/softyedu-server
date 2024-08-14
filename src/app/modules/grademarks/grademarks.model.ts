import { Schema, model } from 'mongoose';
import { TGradeMark } from './grademarks.interface';


const GradeMarkSchema = new Schema<TGradeMark>({
  exam_type: {
    type: String,
    required: [true, 'Exam Type is required'],
  },
  grade_name: {
    type: String,
    required: [true, 'Grade Name is required'],
  },
  percent: {
    type: String,
    required: [true, 'Percent is required'],
  },
  grade_point: {
    type: String,
    required: [true, 'Grade Point is required'],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const GradeMarkModel = model<TGradeMark>('GradeMark', GradeMarkSchema);
