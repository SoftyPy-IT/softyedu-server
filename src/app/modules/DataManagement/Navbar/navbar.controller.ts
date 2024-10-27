import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../../../utils/catchAsync';
import sendResponse from '../../../../utils/sendResponse';
import { NavbarServices } from './navbar.service';

const createNavbar = catchAsync(async (req, res) => {
  const navbar = await NavbarServices.createNavbarIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Navbar created successful!',
    data: navbar,
  });
});
const getNavbar = catchAsync(async (req, res) => {
  const navbar = await NavbarServices.getAllNavbarFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Navbar retrieved successful!',
    data: navbar,
  });
});
const updateNavbar = catchAsync(async (req, res) => {
  const { id } = req.params;

  const navbar = await NavbarServices.updateNavbarInDB(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Navbar update successful!',
    data: navbar,
  });
});
const deleteSubCategory = catchAsync(async (req, res) => {
  const { id, subCategory } = req.params;

  const navbar = await NavbarServices.deleteSubCategoryFromDB(id, subCategory);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Sub category deleted successful!',
    data: navbar,
  });
});

export const navbarController = {
  createNavbar,
  getNavbar,
  deleteSubCategory,
  updateNavbar,
};
