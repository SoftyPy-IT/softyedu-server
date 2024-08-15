import { model, Schema } from 'mongoose';
import { TExam } from './exam.interface';

const examSchema = new Schema<TExam>({
  name: {
    type: String,
    required: [true, 'Exame name is requried'],
  },
  isDeleted: {
    type: Boolean,
   default:false
  },

});

export const Exam = model<TExam>('Exam', examSchema);
