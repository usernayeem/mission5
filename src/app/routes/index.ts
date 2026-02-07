import { Router } from "express";
import { SpecialtyRoute } from "../module/specialty.route";

const router = Router();

router.use("/specialities", SpecialtyRoute);

export const IndexRoute = router;