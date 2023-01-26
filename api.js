"use strict";
//imports
import express from "express";
import cors from "cors";
import router from "./routes/routes.js";

//variables
const app = express();
const port = process.env.PORT || 3001;
//middlewares
app.use(express.json());
app.use(cors());

//code
app.use(router)

app.listen(port, console.log("server listening on port " + port));
