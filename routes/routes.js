import { Router } from "express";
import db from "../db/index.js";
const router = Router();

router.get("/api/v1/restaurants/", async (req, res) => {
  try {
    const response = await db.query("select * from restaurants");
    console.log("get");
    res.status(200).json({
      success: true,
      results: response.rows.length,
      data: response.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
    });
  }
});

router.post("/api/v1/restaurants/", async (req, res) => {
  try {
    const response = await db.query("select * from restaurants");
    console.log("get", response);
  } catch (err) {
    console.log(err);
  }
});

router.put("/api/v1/restaurants/:restaurantid", async (req, res) => {
  try {
    const response = await db.query("select * from restaurants");
    console.log("get", response);
  } catch (err) {
    console.log(err);
  }
});

router.get("/api/v1/restaurants/:restaurantid", async (req, res) => {
  try {
    const response = await db.query("select * from restaurants");
    console.log("get", response);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/api/v1/restaurants/:restaurantid", async (req, res) => {
  try {
    const response = await db.query("select * from restaurants");
    console.log("get", response);
  } catch (err) {
    console.log(err);
  }
});

export default router;
