/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { Admission } from './admission.model';
import { admissionSearchAbelField } from './admission.constant';
import { TAdmission } from './admission.interface';
import { AppError } from '../../error/AppError';
import httpStatus from 'http-status';

const addToAdmission = async (payload: TAdmission) => {
  const result = await Admission.create(payload);
  return result;
};

const getAllAdmission = async (query: Record<string, unknown>) => {
  const studentQuery = new QueryBuilder(Admission.find(), query)
    .search(admissionSearchAbelField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await studentQuery.countTotal();
  const admissions = await studentQuery.modelQuery;

  return {
    meta,
    admissions,
  };
};
const getSinigleAdmission = async (id: string) => {
  const result = await Admission.findById(id);
  return result;
};
const updateAdmission = async (id: string, payload: Partial<TAdmission>) => {
  const {
    name,
    guardian,
    localGuardian,
    presentAddress,
    permanentAddress,
    ...remainingStudentData
  } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }

  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }
  if (presentAddress && Object.keys(presentAddress).length) {
    for (const [key, value] of Object.entries(presentAddress)) {
      modifiedUpdatedData[`presentAddress.${key}`] = value;
    }
  }
  if (permanentAddress && Object.keys(permanentAddress).length) {
    for (const [key, value] of Object.entries(permanentAddress)) {
      modifiedUpdatedData[`permanentAddress.${key}`] = value;
    }
  }

  const result = await Admission.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteAdmission = async (id: string): Promise<TAdmission | null> => {
    console.log('Deleting Admission with id:', id);

    const result = await Admission.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }, 
    );
  
    if (!result) {
      throw new AppError(httpStatus.NOT_FOUND, 'Admission not found or already deleted');
    }
  
    return result;
  };
  

export const AdmissionServices = {
  addToAdmission,
  getAllAdmission,
  getSinigleAdmission,
  updateAdmission,
  deleteAdmission,
};
