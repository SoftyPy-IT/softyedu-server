
import { TMonths } from "../student/student.interface";

export type TStatus = 'complete' | 'pending' | 'on-hold' | 'cancell'
export interface ISalary {
  id: string;
  name: string;
  type: string; 
  salary: string;
  bonus: string;
  total: string;
  date: Date | null; 
  month: TMonths[]; 
  status: TStatus[]; 
}
