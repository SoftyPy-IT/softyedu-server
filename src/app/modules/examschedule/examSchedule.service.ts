import QueryBuilder from '../../builder/QueryBuilder';
import { examScheduleSearchableFields } from './examSchedule.constant';
import { TSchedule } from './examSchedule.interface';
import ScheduleModel from './examSchedule.model';

const createExamSchedule = async (payload: TSchedule) => {
  const result = ScheduleModel.create(payload);
  return result;
};
const getAllExamSchedule = async (query: Record<string, unknown>) => {
  const examScheduleQuery = new QueryBuilder(ScheduleModel.find(), query)
    .search(examScheduleSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await examScheduleQuery.countTotal();
  const schedules = await examScheduleQuery.modelQuery;

  return {
    meta,
    schedules,
  };
};
const getSingleExamSchedule = async (id: string) => {
  const result = ScheduleModel.findById(id);
  return result;
};
const deleteExamSchedule = async (id: string) => {
  const result = await ScheduleModel.deleteOne({ _id: id });
  return result;
};
const updateExamSchedule = async (id: string, payload:TSchedule) => {
  const result = await ScheduleModel.findByIdAndUpdate({ _id: id }, payload,{
    new:true,
    runValidators:true
  });
  return result;
};

export const ScheduleServices = {
  createExamSchedule,
  getAllExamSchedule,
  getSingleExamSchedule,
  deleteExamSchedule,
  updateExamSchedule
};
