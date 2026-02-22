import { User } from "./../../generated/prisma/client";
import { Router } from "express";

import { AuthRoutes } from "../module/auth/auth.route";
import { SpecialtyRoute } from "../module/speciality/specialty.route";
import { UserRoutes } from "../module/user/user.route";
import { DoctorRoutes } from "../module/doctor/doctor.route";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/specialities", SpecialtyRoute);
router.use("/users", UserRoutes);
router.use("/doctors", DoctorRoutes);

export const IndexRoute = router;
