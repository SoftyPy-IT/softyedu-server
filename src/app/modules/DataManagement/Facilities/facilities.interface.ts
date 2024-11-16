export interface TImageTitle {
    title: string;  // Title for the image
    image: string;  // Image file name or URL
  }
  
  export interface TFacilityItem {
    title?: string; // Optional title for the facility
    caption: string; // Caption describing the facility
    folder_name: string; // Folder name for the facility's images
    image?: string; // Single image (optional, used for some facilities)
    images?: TImageTitle[]; // Multiple images (optional, used for facilities like "science_lab" and "other_facilities")
  }
  
  export interface TFacilities {
    science_lab: TFacilityItem[]; // Array of science lab facilities
    ict_lab: TFacilityItem[]; // Array of ICT lab facilities
    library: TFacilityItem[]; // Array of library facilities
    multi_media_class: TFacilityItem[]; // Array of multimedia class facilities
    s_net: TFacilityItem[]; // Array of network facilities
    qip_sms: TFacilityItem[]; // Array of QIP SMS facilities
    spacious_auditorium: TFacilityItem[]; // Array of auditorium facilities
    common_room: TFacilityItem[]; // Array of common room facilities
    prayer_room: TFacilityItem[]; // Array of prayer room facilities
    ride_service: TFacilityItem[]; // Array of ride service facilities
    other_facilities: TFacilityItem[]; // Array of other facilities
  }
  