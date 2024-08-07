import { USER_ROLE } from "./user.constant";

export interface TUser {
  id: string;
  email: string;
  password: string;
  needPasswordChange: boolean;
  role: 'admin' | 'super_admin' | 'student' | 'teacher';
  isDeleted: boolean;
  status: 'in-progress' | 'blocked';
  passwordChangeAt?: Date;
}




export type TUserRole = keyof typeof USER_ROLE