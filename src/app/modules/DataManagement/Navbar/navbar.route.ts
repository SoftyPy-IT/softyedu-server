import express from 'express';

import { navbarValidation } from './navbar.validation';
import { navbarController } from './navbar.controller';
import { validateRequest } from '../../../../utils/validateRequest';
 

const router = express.Router();

router
  .route('/')
  .post(
    // authorization(USER_ROLE.super_admin),
    validateRequest(navbarValidation.navbarValidationSchema),
    navbarController.createNavbar,
  )
  .get(navbarController.getNavbar);

router.route('/:id').put(
  // authorization(USER_ROLE.super_admin),
  validateRequest(navbarValidation.navbarValidationSchema),
  navbarController.updateNavbar,
).delete(navbarController.deleteCategory);

router.route('/:id/:index').put(
  // authorization(USER_ROLE.super_admin),
  navbarController.deleteSubCategory,
);

export const NavbarRoutes = router;
