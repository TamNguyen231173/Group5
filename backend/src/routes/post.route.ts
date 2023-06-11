import express from "express";
import {
  createPostHandler,
  deletePostHandler,
  getPostHandler,
  getPostsHandler,
  parsePostFormData,
  updatePostHandler,
} from "../controllers/post.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireAdmin, requireUser } from "../middleware/requireUser";
import { validate } from "../middleware/validate";
import {
  createPostSchema,
  deletePostSchema,
  getPostSchema,
  updatePostSchema,
} from "../schema/post.schema";

const router = express.Router();

// route for public
router.route("/").get(getPostsHandler);

router.route("/:postId").get(validate(getPostSchema), getPostHandler);

// route for user
router.use(deserializeUser, requireUser);

// route for admin
router.use(requireAdmin);
router.route("/").post(validate(createPostSchema), createPostHandler);

router
  .route("/:postId")
  .patch(validate(updatePostSchema), updatePostHandler)
  .delete(validate(deletePostSchema), deletePostHandler);

export default router;
