export type TFeatures = {
  title: string;
  description: string;
  folder_name: string;
  image: string;
}

export type TSchoolFeatures = {
  title: string;
  description: string;
  
  features: TFeatures[]

};
