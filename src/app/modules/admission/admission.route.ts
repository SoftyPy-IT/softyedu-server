import express from 'express';
import { AdmissionController } from './admission.controller';
import { validateRequest } from '../../../utils/validateRequest';
import { admissionValidations } from './admission.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(admissionValidations.createAdmissionValidationSchema),
  AdmissionController.addToAdmission,
);
router.get('/', AdmissionController.getAllAdmission);
router.get('/:id', AdmissionController.getSingleAdmission);
router.delete('/:id', AdmissionController.deleteAdmission);
router.patch(
  '/:id',
  validateRequest(admissionValidations.updateAdmissionValidationSchema),
  AdmissionController.updateAdmission,
);

export const admissionRoutes = router;
