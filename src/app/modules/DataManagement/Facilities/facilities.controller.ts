import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../../../utils/catchAsync";
import sendResponse from "../../../../utils/sendResponse";
import { FacilitiesServices } from "./facilities.service";

const createFacilities = catchAsync(async (req, res) => {
    const result = await FacilitiesServices.createFacilitiesIntoDB(
      req.body,
    );
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Create facilities successful!',
      data: result,
    });
  });



  
const getAllFacilities = catchAsync(async (req, res) => {
    const result = await FacilitiesServices.getAllFacilitiesFromDB(req.query);
  
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Facilities are retrieved successfully',
      data: result,
    });
  });
  
//   const updateFolder = catchAsync(async (req, res) => {
//     const { id } = req.params;
  
//     const result = await FolderServices.updateFolderInDB(
//       id,
//       req.body,
//     );
//     sendResponse(res, {
//       statusCode: StatusCodes.OK,
//       success: true,
//       message: 'Folder update successful!',
//       data: result,
//     });
//   });
//   const deleteFolder = catchAsync(async (req, res) => {
//     const { id } = req.params;
  
//     const result = await FolderServices.deleteFolderFromDB(id);
//     sendResponse(res, {
//       statusCode: StatusCodes.OK,
//       success: true,
//       message: 'Folder deleted successful!',
//       data: result,
//     });
//   });

  export const facilitiesController = {
    createFacilities,
    getAllFacilities
  };