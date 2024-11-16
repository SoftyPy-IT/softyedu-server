import mongoose, { Model, Schema } from "mongoose";
import { TFacilities, TFacilityItem, TImageTitle } from "./facilities.interface";

 
const imageTitleSchema: Schema<TImageTitle> = new Schema({
    title: { type: String },
    image: { type: String }
  });
  
  // Define the schema for TFacilityItem
  const facilitySchema: Schema<TFacilityItem> = new Schema({
    title: { type: String, required: false },
    caption: { type: String, required: [true, 'Cation is required.'] },
    image: { type: String, required: false },
    folder_name: { type: String, required: [true, 'Folder name is required.'] },
    images: { type: [imageTitleSchema] }
  });

// Define the Schema for TFacilitiesModel
const facilitiesSchema: Schema<TFacilities> = new Schema<TFacilities>(
    {
        science_lab: {
            type: [facilitySchema],
            default: [],
        },
        ict_lab: {
            type: [facilitySchema],
            default: [],
        },
        library: {
            type: [facilitySchema],
            default: [],
        },
        multi_media_class: {
            type: [facilitySchema],
            default: [],
        },
        s_net: {
            type: [facilitySchema],
            default: [],
        },
        qip_sms: {
            type: [facilitySchema],
            default: [],
        },
        spacious_auditorium: {
            type: [facilitySchema],
            default: [],
        },
        common_room: {
            type: [facilitySchema],
            default: [],
        },
        prayer_room: {
            type: [facilitySchema],
            default: [],
        },
        ride_service: {
            type: [facilitySchema],
            default: [],
        },
        other_facilities: {
            type: [facilitySchema],
            default: [],
        },
    },
    { timestamps: true } // This will add createdAt and updatedAt fields to the schema
);


export const Facilities: Model<TFacilities> = mongoose.model<TFacilities>(
    'Facilities',
    facilitiesSchema
);   