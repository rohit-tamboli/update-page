import express from "express";
import payment from "./routes/productRoutes.js";

// new add
import cors from "cors";

const app = express();

// new add
app.use(
  cors({
    origin: "http://localhost:5173",
    https: "https://update-page-nu.vercel.app/",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", payment);

export default app;
