import express from "express";
import cors from "cors";
import claimRoutes from "./routes/claimRoutes.js";

const app = express();

app.use(
  cors({
    origin: ["https://claim-form-frontend-u2dv.vercel.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

app.use("/api", claimRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

export default app;
// https://claim-form-frontend-u2dv.vercel.app/
