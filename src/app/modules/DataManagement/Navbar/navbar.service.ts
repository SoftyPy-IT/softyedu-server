import mongoose from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import { TNavbar } from './navbar.interface';
import { Navbar } from './navbar.model';
import { AppError } from '../../../error/AppError';



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



const deleteSubCategoryFromDB = async (id: string, subCategoryIndex: number) => {
  // Find the Navbar document by ID
  const existingCategory = await Navbar.findById(id);
  if (!existingCategory) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Category not found.');
  }

  // Check if the provided index is within bounds
  if (subCategoryIndex < 0 || subCategoryIndex >= existingCategory.sub_category.length) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid sub-category index.');
  }

  // Remove the sub-category at the specified index
  existingCategory.sub_category.splice(subCategoryIndex, 1);

  // Save the updated document
  const updatedNavBar = await existingCategory.save();
  return updatedNavBar;
};
const deleteCategoryFromDB = async (id: string) => {
  // Find the Navbar document by ID
  const category = await Navbar.findByIdAndDelete(id);
  if (!category) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Category not found.');
  }
  return category;
};



const updateNavbarInDB = async (id: string, payload: Partial<TNavbar>) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Ensure sub_category is an array
    if (payload.sub_category && !Array.isArray(payload.sub_category)) {
      payload.sub_category = [payload.sub_category];
    }

    // Find the existing Navbar document by ID
    const existingCategory = await Navbar.findById(id).session(session);
    if (!existingCategory) {
      throw new AppError(StatusCodes.NOT_FOUND, 'Category not found.');
    }

    // Check if a category with the same name exists, but is not the current one
    const conflictCategory = await Navbar.findOne({
      category: payload.category,
      _id: { $ne: id },
    }).session(session);

    if (conflictCategory) {
      throw new AppError(
        StatusCodes.CONFLICT,
        'Category already exists. Please use a different category name.'
      );
    }

    // Update the existing category with the new payload
    Object.assign(existingCategory, payload);
    const updatedNavbar = await existingCategory.save({ session });

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
  deleteCategoryFromDB
};
