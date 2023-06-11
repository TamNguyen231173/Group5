import express from "express";
import {
  createVideoHandler,
  deleteVideoHandler,
  getVideoHandler,
  getVideosHandler,
  updateVideoHandler,
} from "../controllers/video.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireAdmin, requireUser } from "../middleware/requireUser";
import { validate } from "../middleware/validate";
import {
  createVideoSchema,
  deleteVideoSchema,
  getPaginationVideoSchema,
  getVideoSchema,
  updateVideoSchema,
} from "../schema/video.schema";

const router = express.Router();

// route for public
router.route("/").get(validate(getPaginationVideoSchema), getVideosHandler);

router.route("/:VideoId").get(validate(getVideoSchema), getVideoHandler);

// route for user
router.use(deserializeUser, requireUser);

// route for admin
router.use(requireAdmin);
router.route("/").post(validate(createVideoSchema), createVideoHandler);

router
  .route("/:VideoId")
  .patch(validate(updateVideoSchema), updateVideoHandler)
  .delete(validate(deleteVideoSchema), deleteVideoHandler);

export default router;
