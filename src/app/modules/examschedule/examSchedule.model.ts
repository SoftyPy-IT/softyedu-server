import { model, Schema } from "mongoose";
import { TSchedule } from "./examSchedule.interface";
import { roomNo, subjectName } from "./examSchedule.constant";






const scheduleSchema = new Schema<TSchedule>(
    {
      subject: {
        type: String,
        enum:subjectName,
        required: [true, 'Subject is required'],
      },
      date: {
        type: String,
        required: [true, 'Date is required'],
      },
      time: {
        type: String,
        required: [true, 'Time is required'],
      },
      duration: {
        type: String,
        required: [true, 'Duration is required'],
      },
      room_no: {
        type: String,
        enum: roomNo,
        required: [true, 'Room number is required'],
      },
    },
    {
      toJSON: {
        virtuals: true,
      },
      timestamps: true,
    },
  );
  
  const ScheduleModel = model<TSchedule>('Schedule', scheduleSchema);
  
  export default ScheduleModel;