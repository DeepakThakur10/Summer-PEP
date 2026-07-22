import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import { ConnectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());

ConnectDB();

app.get("/", (req, res) => {
    res.json({
        message: "Response from server"
    });
});


app.use("/auth", authRoutes);
app.use("/courses", courseRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});