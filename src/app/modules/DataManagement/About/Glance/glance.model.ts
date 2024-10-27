import mongoose, { Model, Schema } from 'mongoose';
import { TGlance } from './glance.interface';

const GlanceSchema: Schema<TGlance> = new Schema<TGlance>(
  {
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
  },
  {
    timestamps: true,
  },
);

const Glance: Model<TGlance> = mongoose.model<TGlance>('Glance', GlanceSchema);
export default Glance;
