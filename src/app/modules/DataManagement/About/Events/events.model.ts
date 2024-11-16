import mongoose, { Model, Schema } from 'mongoose';
import { TEvents } from './events.interface';

const EventsSchema: Schema<TEvents> = new Schema<TEvents>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    date: {
      type: String,
      required: [true, 'Date is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
  },
  {
    timestamps: true,
  },
);

const Events: Model<TEvents> = mongoose.model<TEvents>('Events', EventsSchema);
export default Events;
