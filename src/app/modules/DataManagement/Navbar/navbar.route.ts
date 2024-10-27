import express from 'express';
import { validateRequest } from '../../../../utils/validateRequest';
import { navbarValidation } from './navbar.validation';
import { navbarController } from './navbar.controller';

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
);

router.route('/:id/:subCategory').put(
  // authorization(USER_ROLE.super_admin),
  navbarController.deleteSubCategory,
);

export const NavbarRoutes = router;
