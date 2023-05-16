import cors from "cors";
import express, { Application } from "express";
import userRoutes from "./app/modules/user/user.route";

const app: Application = express();

app.use(cors());

// Parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

export default app;
