import QueryBuilder from "../../../builder/QueryBuilder";
import { addImageToFolder } from "../../../middlewares/image-upload-folder";
import { TFacilities, TFacilityItem } from "./facilities.interface";
import { Facilities } from "./facilities.model";


const createFacilitiesIntoDB = async (payload: TFacilities) => {
    // Save the facility document to the database
    const newFacility = new Facilities(payload);
    await newFacility.save();

    // Process facility items for image upload
    for (const key in payload) {
        // Ensure key is a valid key in TFacilities
        if (Object.prototype.hasOwnProperty.call(payload, key)) {
            const facilityItems = payload[key as keyof TFacilities]; // Get facility items (array)

            await Promise.all(
                facilityItems.map(async (feature: TFacilityItem) => {
                    // Check if there's a single image or multiple images
                    if (feature.image) {
                        // Process single image if available
                        await addImageToFolder(feature.folder_name, feature.image);
                    }

                    if (feature.images) {
                        // If multiple images exist, process each image
                        await Promise.all(
                            feature.images.map(async (image) => {
                                await addImageToFolder(feature.folder_name, image.image);
                            })
                        );
                    }
                })
            );
        }
    }

    return newFacility;
};




const getAllFacilitiesFromDB = async (query: Record<string, unknown>) => {
    const facilitiesQuery = new QueryBuilder(Facilities.find(), query)
      .sort()
      .paginate();
  
    const meta = await facilitiesQuery.countTotal();
    const data = await facilitiesQuery.modelQuery;
  
    return {
      meta,
      data,
    };
  };

export const FacilitiesServices = {
    createFacilitiesIntoDB,
    getAllFacilitiesFromDB
};
