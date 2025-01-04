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
  .get(navbarController.getAllNavbar);
  
router
  .route('/client')
  .get(navbarController.getAllClientNavbar);

router.route('/:id')
  .get(navbarController.getSingleNavbar)
  .put(
    // authorization(USER_ROLE.super_admin),
    validateRequest(navbarValidation.updateNavbarValidationSchema),
    navbarController.updateNavbar,
  ).delete(navbarController.deleteCategory).patch(
    // authorization(USER_ROLE.super_admin),
    navbarController.updateNavbarShown,
  );

router.route('/:id/:index').put(
  // authorization(USER_ROLE.super_admin),
  navbarController.deleteSubCategory,
);


export const NavbarRoutes = router;
