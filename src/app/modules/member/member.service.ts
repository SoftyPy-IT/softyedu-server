/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { TMember } from './member.interface';
import { Member } from './member.model';
import { memberSearchabelField } from './member.constant';


const addMemeber = async (payload: TMember) => {
  const result = await Member.create(payload);
  return result;
};

const getAllMemeber = async (query: Record<string, unknown>) => {
  const salaryQuery = new QueryBuilder(Member.find(), query)
    .search(memberSearchabelField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await salaryQuery.countTotal();
  const libraries = await salaryQuery.modelQuery;

  return {
    meta,
    libraries,
  };
};
const getSinigleMemeber = async (id: string) => {
  const result = await Member.findById(id);
  return result;
};
const updateMemeber = async (id: string, payload: Partial<TMember>) => {
  const { ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  const result = await Member.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteMemeber = async (id: string) => {
  const result = await Member.deleteOne({ _id: id });

  return result;
};

export const MemberServices = {
  addMemeber,
  getAllMemeber,
  getSinigleMemeber,
  updateMemeber,
  deleteMemeber,
};
