import mongoose, { Model, Schema } from 'mongoose';
import { TNavbar, TSubCategory } from './navbar.interface';



const SubCategorySchema = new Schema<TSubCategory>({
  category: { type: String },
  href: { type: String, trim: true }
},
  { _id: false } // Disables the `_id` field for this schema
);


const NavbarSchema: Schema<TNavbar> = new Schema<TNavbar>(
  {
    category: {
      type: String,
      required: [true, 'Category name is required.'],
    },
    href: { type: String, trim: true },
    sub_category: {
      type: [SubCategorySchema]
    },
    isShown: { type: Boolean, default: true }
  },
  {
    timestamps: true,
  },
);


export const Navbar: Model<TNavbar> = mongoose.model<TNavbar>(
  'Navbar',
  NavbarSchema,
);
