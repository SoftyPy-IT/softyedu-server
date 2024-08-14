import { TSubject } from '../examschedule/examSchedule.interface';
import { TClass, TShift } from '../student/student.interface';

export type TGmeet = {
  class: TClass;
  description?: string;
  shift: TShift;
  subject: TSubject;
  section: TShift;
  date: Date;
  start_time: Date;
  end_time: Date;
  class_duration?: string;
  created_by?: string;
  created_for?: string;
  status: 'Awaited' | 'Canceled' | 'Finished';
  gmeet_link?: string;
  isDeleted:boolean;
};
