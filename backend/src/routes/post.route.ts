import express from "express";
import {
  createPostHandler,
  deletePostHandler,
  getPostHandler,
  getPostsHandler,
  parsePostFormData,
  updatePostHandler,
  updatePostViewHandler,
} from "../controllers/post.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireAdmin, requireUser } from "../middleware/requireUser";
import { validate } from "../middleware/validate";
import {
  createPostSchema,
  deletePostSchema,
  getPostSchema,
  updatePostSchema,
  getPaginationPostSchema,
} from "../schema/post.schema";

const router = express.Router();

// route for public
router.route("/").get(validate(getPaginationPostSchema), getPostsHandler);

router
  .route("/:postId")
  .get(validate(getPostSchema), getPostHandler)
  .patch(validate(getPostSchema), updatePostViewHandler);

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
