


export type TSocialLink = {
  facebook: string;
  twitter: string;
  linkedin: string;
  website: string;
};

export type TAddress = {
  village: string;
  post_office: string;
  post_code: string;
  union_ward: string;
  police_station: string;
  district: string;
  city: string;
};

export type TTeacher = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string;
  nid: string;
  social_links: TSocialLink;
  present_address: TAddress;
  permanent_address: TAddress;
  university: string;
  degree: string;
  start_date: string;
  end_date: string;
  subject: string;
  department: string;
  designation: string;
  branch: string;
  shift: string;
  joining_date: string;
  prev_institution_name: string;
  teacher_details: string;
};
