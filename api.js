import express from "express";
const app = express();
const port = process.env.PORT || 3001;
app.listen(port, console.log("server listening on port " + port));
