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
  
//   const updateSchoolFeatureInDB = async (
//     id: string,
//     payload: TSchoolFeatures,
//   ) => {
//     const existingSchoolFeature = await SchoolFeatures.findOne({
//       title: payload.title,
//       _id: { $ne: id },
//     });
  
//     if (existingSchoolFeature) {
//       throw new AppError(
//         StatusCodes.CONFLICT,
//         'A School feature with the same title already exists.',
//       );
//     }
//     for (const feature of payload.features) {
//       await addImageToFolder(feature.folder_name, feature.image);
//     }
//     const sanitizeData = sanitizePayload(payload);
  
//     const updatedSchoolFeature = await SchoolFeatures.findByIdAndUpdate(
//       id,
//       sanitizeData,
//       {
//         new: true,
//         runValidators: true,
//       },
//     );
  
//     if (!updatedSchoolFeature) {
//       throw new AppError(StatusCodes.NOT_FOUND, 'School feature not found.');
//     }
  
//     return updatedSchoolFeature;
//   };
  
//   const deleteSchoolFeatureFromDB = async (id: string, featureIndex?: number) => {
//     // Find the SchoolFeatures document by ID
//     const schoolFeature = await SchoolFeatures.findById(id);
  
//     if (!schoolFeature) {
//       throw new AppError(StatusCodes.NOT_FOUND, 'School feature not found.');
//     }
  
//     // If no index is provided, delete the entire SchoolFeatures document
//     if (featureIndex === undefined) {
//       const deletedSchoolFeature = await SchoolFeatures.findByIdAndDelete(id);
  
//       if (!deletedSchoolFeature) {
//         throw new AppError(StatusCodes.NOT_FOUND, 'School feature not found.');
//       }
  
//       return deletedSchoolFeature;
//     }
  
//     // If an index is provided, ensure it's valid (i.e., it's within the bounds of the features array)
//     if (featureIndex < 0 || featureIndex >= schoolFeature.features.length) {
//       throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid feature index.');
//     }
  
//     // Remove the feature at the given index
//     schoolFeature.features.splice(featureIndex, 1);
  
//     // Save the updated document
//     await schoolFeature.save();
  
//     return schoolFeature;
//   };



export const FacilitiesServices = {
    createFacilitiesIntoDB,
    getAllFacilitiesFromDB
};
