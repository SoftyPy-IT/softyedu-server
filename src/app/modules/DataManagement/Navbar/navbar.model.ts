import mongoose, { Model, Schema } from 'mongoose';
import { TNavbar, TSubCategory } from './navbar.interface';



const SubCategorySchema = new Schema<TSubCategory>({
  category: { type: String },
  href: { type: String }
},
  { _id: false } // Disables the `_id` field for this schema
);


const NavbarSchema: Schema<TNavbar> = new Schema<TNavbar>(
  {
    category: {
      type: String,
      required: [true, 'Category name is required.'],
    },
    href: { type: String },
    sub_category: {
      type: [SubCategorySchema],
      validate: {
        validator: function (value: TSubCategory[]) {
          // If sub_category is defined, ensure it has at least one item
          return !value || value.length > 0;
        },
        message: 'sub_category, if provided, must contain at least one item.'
      }
    }
  },
  {
    timestamps: true,
  },
);


export const Navbar: Model<TNavbar> = mongoose.model<TNavbar>(
  'Navbar',
  NavbarSchema,
);
