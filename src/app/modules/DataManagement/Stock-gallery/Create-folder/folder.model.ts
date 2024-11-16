import mongoose, { Schema, Model } from "mongoose";
import { TFolder } from "./folder.interface";

const FolderSchema: Schema<TFolder> = new Schema<TFolder>(
    {
        name: {
            type: String,
            required: [true, 'Folder name is required.'],
        },
        images: {
            type: [String],
        },
    },
    {
        timestamps: true,
    }
);

// Create and export the Folder model
export const Folder: Model<TFolder> = mongoose.model<TFolder>(
    'Folder',
    FolderSchema
);