import express from 'express';
import { validateRequest } from '../../../../utils/validateRequest';
import { photoGalleryValidation } from './photo-gallery.validation';
import { photoGalleryController } from './photo-gallery.controller';
 

const router = express.Router();

router
  .route('/')
  .post(
    // authorization(USER_ROLE.super_admin),
    validateRequest(photoGalleryValidation.photoGalleryValidationSchema),
    photoGalleryController.createPhotoGallery,
  )
  .get(photoGalleryController.getAllPhotoGalleries);

router
  .route('/:id')
  .put(
    // authorization(USER_ROLE.super_admin),
    validateRequest(
      photoGalleryValidation.updatePhotoGalleryValidationSchema,
    ),
    photoGalleryController.updatePhotoGallery,
  )
  .delete(photoGalleryController.deletePhotoGallery);

export const PhotoGalleryRoutes = router;
