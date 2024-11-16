import { z } from "zod";

// Define the Zod schema for TImageTitle
const imageTitleSchema = z.object({
    title: z.string().min(1, "Title is required."),  // Title for the image
    image: z.string().min(1, "Image URL or filename is required.") // Image file name or URL
});

// Define the Zod schema for TFacilityItem
const facilityItemSchema = z.object({
    title: z.string().optional(), // Title is optional
    caption: z.string({ required_error: "Caption is required." }), // Caption is required
    folder_name: z.string({ required_error: "Folder name is required." }), // Folder name is required
    image: z.string().optional(), // Single image (optional)
    images: z.array(imageTitleSchema).optional() // Multiple images (optional)
});

// Define the Zod schema for the TFacilities model
const facilitiesValidationSchema = z.object({
    body: z.object({
        science_lab: z.array(facilityItemSchema).default([]),
        ict_lab: z.array(facilityItemSchema).default([]),
        library: z.array(facilityItemSchema).default([]),
        multi_media_class: z.array(facilityItemSchema).default([]),
        s_net: z.array(facilityItemSchema).default([]),
        qip_sms: z.array(facilityItemSchema).default([]),
        spacious_auditorium: z.array(facilityItemSchema).default([]),
        common_room: z.array(facilityItemSchema).default([]),
        prayer_room: z.array(facilityItemSchema).default([]),
        ride_service: z.array(facilityItemSchema).default([]),
        other_facilities: z.array(facilityItemSchema).default([]),
    })
});

// Define the Zod schema for updating a facility item
const updateFacilityItemSchema = z.object({
    title: z.string().optional(), // Title is optional
    caption: z.string().optional(), // Caption is optional on update
    image: z.string().optional(), // Single image (optional on update)
    folder_name: z.string().optional(), // Folder name is optional on update
    images: z.array(imageTitleSchema).optional() // Multiple images (optional on update)
});

// Define the Zod schema for updating the TFacilities model
const updateFacilitiesValidationSchema = z.object({
    body: z.object({
        science_lab: z.array(updateFacilityItemSchema).optional(),
        ict_lab: z.array(updateFacilityItemSchema).optional(),
        library: z.array(updateFacilityItemSchema).optional(),
        multi_media_class: z.array(updateFacilityItemSchema).optional(),
        s_net: z.array(updateFacilityItemSchema).optional(),
        qip_sms: z.array(updateFacilityItemSchema).optional(),
        spacious_auditorium: z.array(updateFacilityItemSchema).optional(),
        common_room: z.array(updateFacilityItemSchema).optional(),
        prayer_room: z.array(updateFacilityItemSchema).optional(),
        ride_service: z.array(updateFacilityItemSchema).optional(),
        other_facilities: z.array(updateFacilityItemSchema).optional(),
    })
});

export const facilitiesValidation = {
    facilitiesValidationSchema,
    updateFacilitiesValidationSchema
};
