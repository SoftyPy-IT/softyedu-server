import express from 'express';
import { validateRequest } from '../../../../utils/validateRequest';
import { bannerController } from './banner.controller';
import { bannerValidation } from './banner.validation';

const router = express.Router();

router
  .route('/')
  .post(
    // authorization(USER_ROLE.super_admin),
    validateRequest(bannerValidation.bannerValidationSchema),
    bannerController.createBanner,
  )
  .get(bannerController.getAllBanners);

router
  .route('/:id')
  .put(
    // authorization(USER_ROLE.super_admin),
    validateRequest(bannerValidation.updateBannerValidationSchema),
    bannerController.updateBanner,
  )
  .delete(bannerController.deleteBanner);

export const BannerRoutes = router;
