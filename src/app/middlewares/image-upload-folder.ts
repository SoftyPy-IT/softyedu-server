
import { StatusCodes } from "http-status-codes";
import { AppError } from "../error/AppError";
import { Folder } from "../modules/DataManagement/Stock-gallery/Create-folder/folder.model";

export const addImageToFolder = async (
  folderName: string,
  imageUrl: string,

): Promise<void> => {
  const folder = await Folder.findOne({ name: folderName });

  if (!folder) {
    throw new AppError(StatusCodes.NOT_FOUND, "Folder not found.")
  }

  if (folder) {
    folder.images = folder.images || []; // Ensure images is initialized

    // Check if the image already exists
    const imageExists = folder.images.includes(imageUrl);

    if (!imageExists) {
      folder.images.push(imageUrl);
      // Save the folder with the session
      await folder.save();
    }
  }
};
