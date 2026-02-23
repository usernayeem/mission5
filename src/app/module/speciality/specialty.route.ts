import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";
import { checkAuth } from "../../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.post('/', SpecialtyController.createSpecialty);
router.get('/', checkAuth(Role.Admin, Role.Super_Admin, Role.Doctor), SpecialtyController.getAllSpecialties);
router.get('/:id', SpecialtyController.getSpecialtyById);
router.put('/:id', SpecialtyController.updateSpecialty);
router.delete('/:id', SpecialtyController.deleteSpecialty);

export const SpecialtyRoute = router;
