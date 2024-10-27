import mongoose from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../../error/AppError';
import { TNavbar } from './navbar.interface';
import { Navbar } from './navbar.model';
import sanitizePayload from '../../../middlewares/updateData';

const createNavbarIntoDB = async (payload: TNavbar) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    if (!Array.isArray(payload.sub_category)) {
      payload.sub_category = [payload.sub_category];
    }

    const existingCategory = await Navbar.findOne({
      category: payload.category,
    }).session(session);

    if (existingCategory) {
      throw new AppError(
        StatusCodes.CONFLICT,
        'Category already exists. Please use a different category name.',
      );
    }

    const navbar = await Navbar.create([payload], { session });

    await session.commitTransaction();
    return navbar[0];
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

const getAllNavbarFromDB = async () => {
  const navbar = await Navbar.find({}).sort({ createdAt: -1 });

  if (navbar.length === 0) {
    throw new AppError(StatusCodes.NOT_FOUND, 'No data found');
  }

  return navbar;
};

const deleteSubCategoryFromDB = async (id: string, subCategoryName: string) => {
  const existingCategory = await Navbar.findById(id);
  if (!existingCategory) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Category not found.');
  }
  const subCategoryIndex =
    existingCategory.sub_category.indexOf(subCategoryName);
  if (subCategoryIndex === -1) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Sub-category not found.');
  }

  // Remove the sub-category from the array
  existingCategory.sub_category.splice(subCategoryIndex, 1);

  const updatedNavBar = await existingCategory.save();
  return updatedNavBar;
};

const updateNavbarInDB = async (id: string, payload: TNavbar) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    if (payload.category) {
      const existingCategory = await Navbar.findOne({
        category: payload.category,
      }).session(session);

      if (existingCategory && existingCategory._id.toString() !== id) {
        throw new AppError(
          StatusCodes.CONFLICT,
          'Category already exists. Please use a different category name.',
        );
      }
    }

    if (payload.sub_category) {
      if (!Array.isArray(payload.sub_category)) {
        payload.sub_category = [payload.sub_category];
      }
    }
    const sanitizedData = sanitizePayload(payload);

    const updatedNavbar = await Navbar.findByIdAndUpdate(id, sanitizedData, {
      new: true,
      runValidators: true,
      session,
      omitUndefined: true,
    });

    if (!updatedNavbar) {
      throw new AppError(StatusCodes.NOT_FOUND, 'Navbar item not found.');
    }

    await session.commitTransaction();
    return updatedNavbar;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

export const NavbarServices = {
  createNavbarIntoDB,
  getAllNavbarFromDB,
  deleteSubCategoryFromDB,
  updateNavbarInDB,
};
