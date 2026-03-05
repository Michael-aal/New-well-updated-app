// server.js
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("."));
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
