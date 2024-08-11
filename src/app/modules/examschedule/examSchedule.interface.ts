import { roomNo, subjectName } from "./examSchedule.constant";

export type TSubject = typeof subjectName[number];
export type TRoomNo = typeof roomNo[number];


export type TSchedule = {
    subject: TSubject;
    date: string | null;
    time: string | null;
    duration: string;
    room_no: TRoomNo
  };
  