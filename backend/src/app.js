import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import { indexRoutes } from "../src/routes/index.routes.js";
import authRouter from "../src/routes/auth.routes.js";
import PostRouter from "./routes/post.routes.js";
import CommentRouter from "./routes/comment.routes.js";



const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));

app.use("/", indexRoutes);
app.use("/api", authRouter);
app.use("/api/posts", PostRouter);
app.use("/api/comments", CommentRouter);

export default app;

