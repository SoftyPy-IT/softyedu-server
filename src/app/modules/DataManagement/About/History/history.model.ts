import mongoose, { Model, Schema } from 'mongoose';
import { THistory } from './history.interface';

const HistorySchema: Schema<THistory> = new Schema<THistory>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    vision: {
      type: String,
      required: [true, 'Vision is required'],
    },
    mission: {
      type: String,
      required: [true, 'Mission is required'],
    },
    short_history: [
      {
        year: {
          type: Number,
          required: [true, 'Year is required'],
        },
        description: {
          type: String,
          required: [true, 'Short history description is required'],
        },
        _id: false,
      },
    ],
  },
  {
    timestamps: true,
  },
);

const History: Model<THistory> = mongoose.model<THistory>(
  'History',
  HistorySchema,
);
export default History;
