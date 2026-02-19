import { Router } from "express";

import { AuthRoutes } from "../module/auth/auth.route";
import { SpecialtyRoute } from "../module/speciality/specialty.route";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/specialities", SpecialtyRoute);

export const IndexRoute = router;
