import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { LibraryValidations } from './library.validation';
import { LibraryControllers } from './library.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(LibraryValidations.createLibraryValidationSchema),
  LibraryControllers.addLibrary,
);
router.get('/', LibraryControllers.getAlLibrary);
router.get('/:id', LibraryControllers.getSinglLibrary);
router.delete('/:id', LibraryControllers.deletLibrary);
router.patch(
  '/:id',
  validateRequest(LibraryValidations.updateLibraryValidationSchema),
  LibraryControllers.updatLibrary
);

export const libraryRoutes = router;
