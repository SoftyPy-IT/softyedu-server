import { StatusCodes } from "http-status-codes";
import { TPhotoGallery } from "./photo-gallery.interface";
import { PhotoGallery } from "./photo-gallery.model";
import { AppError } from "../../../error/AppError";
import { addImageToFolder } from "../../../middlewares/image-upload-folder";
import QueryBuilder from "../../../builder/QueryBuilder";
import sanitizePayload from "../../../middlewares/updateData";

const createPhotoGalleryIntoDB = async (payload: TPhotoGallery) => {
    const existingPhotoGalleryName = await PhotoGallery.findOne({ name: payload.name });
  
    if (existingPhotoGalleryName) {
      throw new AppError(
        StatusCodes.CONFLICT,
        'Photo Gallery Name already exists.',
      );
    }
  
    await addImageToFolder(payload.folder_name, payload.image);
    const result = await PhotoGallery.create(payload);
    return result;
  };
  
  const getAllPhotoGalleryFromDB = async (query: Record<string, unknown>) => {
    const photoGalleryQuery = new QueryBuilder(PhotoGallery.find(), query)
      .sort()
      .paginate();
  
    const meta = await photoGalleryQuery.countTotal();
    const data = await photoGalleryQuery.modelQuery;
  
    return {
      meta,
      data,
    };
  };
  
  const updatePhotoGalleryInDB = async (
    id: string,
    payload: TPhotoGallery,
  ) => {
    const existingPhotoGallery = await PhotoGallery.findOne({
      name: payload.name,
      _id: { $ne: id },
    });
  
    if (existingPhotoGallery) {
      throw new AppError(
        StatusCodes.CONFLICT,
        'Photo gallery with the same name already exists.',
      );
    }
   
      await addImageToFolder(payload.folder_name, payload.image);
  
    const sanitizeData = sanitizePayload(payload);
  
    const updatedPhotoGallery = await PhotoGallery.findByIdAndUpdate(
      id,
      sanitizeData,
      {
        new: true,
        runValidators: true,
      },
    );
  
    if (!updatedPhotoGallery) {
      throw new AppError(StatusCodes.NOT_FOUND, 'Photo gallery not found.');
    }
  
    return updatedPhotoGallery;
  };
  

  const deletePhotoGalleryFromDB = async (id: string) => {
    const deletedPhotoGallery = await PhotoGallery.findByIdAndDelete(id);
  
    if (!deletedPhotoGallery) {
      throw new AppError(StatusCodes.NOT_FOUND, 'Photo gallery not found.');
    }
  
    return deletedPhotoGallery;
  };

export const PhotoGalleryServices ={
    createPhotoGalleryIntoDB,
    getAllPhotoGalleryFromDB,
    updatePhotoGalleryInDB,
    deletePhotoGalleryFromDB
}