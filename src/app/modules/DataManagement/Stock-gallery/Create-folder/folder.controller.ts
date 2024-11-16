import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../../../../utils/catchAsync';
import sendResponse from '../../../../../utils/sendResponse';
import { FolderServices } from './folder.service';
 

const createFolder = catchAsync(async (req, res) => {
  const result = await FolderServices.createFolderIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Folder created successful!',
    data: result,
  });
});

const getAllFolders = catchAsync(async (req, res) => {
  const result = await FolderServices.getAllFolderFromDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Folders are retrieved successfully',
    data: result,
  });
});

const updateFolder = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await FolderServices.updateFolderInDB(
    id,
    req.body,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Folder update successful!',
    data: result,
  });
});
const deleteFolder = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await FolderServices.deleteFolderFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Folder deleted successful!',
    data: result,
  });
});

export const folderController = {
  createFolder,
  getAllFolders,
  updateFolder,
  deleteFolder,
};
