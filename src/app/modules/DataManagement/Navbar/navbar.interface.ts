export type TSubCategory = {
  category: string
  href: string
}

export type TNavbar = {
  category: string;
  href: string
  sub_category: TSubCategory[];
};
