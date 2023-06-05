import express from "express";
import {
  createCategoryHandler,
  deleteCategoryHandler,
  getCategoryHandler,
  getCategorysHandler,
  parseCategoryFormData,
  updateCategoryHandler,
} from "../controllers/category.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser, requireAdmin } from "../middleware/requireUser";
import { validate } from "../middleware/validate";
import {
  createCategorySchema,
  deleteCategorySchema,
  getCategorySchema,
  updateCategorySchema,
} from "../schema/category.schema";

const router = express.Router();

router.route("/").get(getCategorysHandler);

router.use(deserializeUser);

router
  .route("/")
  .post(validate(createCategorySchema), requireAdmin, createCategoryHandler);

router
  .route("/:CategoryId")
  .get(validate(getCategorySchema), requireAdmin, getCategoryHandler)
  .patch(validate(updateCategorySchema), requireAdmin, updateCategoryHandler)
  .delete(validate(deleteCategorySchema), requireAdmin, deleteCategoryHandler);

export default router;
