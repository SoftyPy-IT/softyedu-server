import mongoose, { Model, Schema } from 'mongoose';
import { TNavbar } from './navbar.interface';

const NavbarSchema: Schema<TNavbar> = new Schema<TNavbar>(
  {
    category: {
      type: String,

      required: [true, 'Category name is required.'],
    },
    sub_category: [
      { type: String, required: [true, 'Sub category name is required.'] },
    ],
  },
  {
    timestamps: true,
  },
);

export const Navbar: Model<TNavbar> = mongoose.model<TNavbar>(
  'Navbar',
  NavbarSchema,
);
