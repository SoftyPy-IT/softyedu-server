import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../../../utils/catchAsync";
import sendResponse from "../../../../utils/sendResponse";
import { PhotoGalleryServices } from "./photo-gallery.service";



const createPhotoGallery = catchAsync(async (req, res) => {
    const result = await PhotoGalleryServices.createPhotoGalleryIntoDB(
      req.body,
    );
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Gallery photo added successful!',
      data: result,
    });
  });
  


    const getAllPhotoGalleries = catchAsync(async (req, res) => {
    const result = await PhotoGalleryServices.getAllPhotoGalleryFromDB(
      req.query,
    );
  
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Photo galleries are retrieved successfully',
      data: result,
    });
  });
  
  const updatePhotoGallery = catchAsync(async (req, res) => {
    const { id } = req.params;
  
    const result = await PhotoGalleryServices.updatePhotoGalleryInDB(
      id,
      req.body,
    );
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Photo gallery update successful!',
      data: result,
    });
  });
  const deletePhotoGallery = catchAsync(async (req, res) => {
    const { id } = req.params;
  
    const result = await PhotoGalleryServices.deletePhotoGalleryFromDB(id);
  
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Photo gallery deleted successfully!',
      data: result,
    });
  });



export const photoGalleryController = {
    createPhotoGallery,
    getAllPhotoGalleries,
    updatePhotoGallery,
    deletePhotoGallery
}