import { StatusCodes } from "http-status-codes";
import QueryBuilder from "../../../../builder/QueryBuilder";
import { AppError } from "../../../../error/AppError";
import sanitizePayload from "../../../../middlewares/updateData";
import { TFolder } from "./folder.interface";
import { Folder } from "./folder.model";


const createFolderIntoDB = async (payload: TFolder) => {
    const existingFolder = await Folder.findOne({ name: payload.name })
    if (existingFolder) {
        throw new AppError(StatusCodes.CONFLICT, "Folder name already exist.")
    }
    const result = await Folder.create(payload);
    return result;
};

const getAllFolderFromDB = async (query: Record<string, unknown>) => {
    const folderQuery = new QueryBuilder(Folder.find(), query)
        .sort()
        .paginate();

    const meta = await folderQuery.countTotal();
    const data = await folderQuery.modelQuery;

    return {
        meta,
        data,
    };
};

const updateFolderInDB = async (id: string, payload: Partial<TFolder>) => {


    const existingFolder = await Folder.findOne({ name: payload.name })
    if (existingFolder) {
        throw new AppError(StatusCodes.CONFLICT, "Folder name already exist.")
    }

    const sanitizeData = sanitizePayload(payload);

    const updatedFolder = await Folder.findByIdAndUpdate(
        id,
        sanitizeData,
        {
            new: true,
            runValidators: true,
        },
    );

    if (!updatedFolder) {
        throw new AppError(StatusCodes.NOT_FOUND, 'Folder not found.');
    }

    return updatedFolder;
};

const deleteFolderFromDB = async (id: string) => {
    const deletedFolder = await Folder.findByIdAndDelete(id);

    if (!deletedFolder) {
        throw new AppError(StatusCodes.NOT_FOUND, 'Folder not found.');
    }

    return deletedFolder;
};

export const FolderServices = {
    createFolderIntoDB,
    getAllFolderFromDB,
    updateFolderInDB,
    deleteFolderFromDB,
};