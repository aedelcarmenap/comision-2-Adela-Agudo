import { Router } from "express";
import { authRequired } from "../middlewares/auth.jwt.js";
import {
  createComment,
  deleteComment,
  getComment,
  getComments,
  updateComment,
} from "../controllers/comment.controller.js";

const router = Router();

router.get("/comments", getComments);

router.get("/comment/:id", getComment);

router.post("/comments/:postId", authRequired, createComment);

router.delete("/comments/:id", authRequired, deleteComment);

router.put("/comments/:id", authRequired, updateComment);

export default router;
