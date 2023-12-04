import { Router } from "express";
import { authRequired } from "../middlewares, auth.jwt.js";
import {
  getPosts,
  getPost,
  cratePost,
  updatePost,
  deletePost,
} from "../controllers/post.controllers.js";

const router = Router();

router.get("/posts", getPosts);

router.get("/posts/:id", getPost);

router.post("/posts", authRequired, creartePost);

router.delete("/posts/:id", authRequired, updatePost);

router.put("/posts/:id", authRequired, updatePost);

export default router;
