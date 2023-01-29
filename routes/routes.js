import { Router } from "express";
import db from "../db/index.js";
const router = Router();

router.get("/api/v1/restaurants", async (req, res) => {
  try {
    const response = await db.query("select * from restaurants");
    console.log("get");
    res.status(200).json({
      success: true,
      results: "get",
      data: response.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
    });
  }
});

router.post("/api/v1/restaurants", async (req, res) => {
  try {
    const response = await db.query(
      "INSERT INTO restaurants (name,location,price_range) values ($1,$2,$3)",
      [req.body.name, req.body.location, req.body.price_range]
    );
    res.status(200).json({
      success: true,
      results: "post",
      data: response.rows,
    });
  } catch (err) {
    console.log(err);
  }
});

router.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const response = await db.query(
      "UPDATE restaurants SET name=$1,location=$2,price_range=$3 WHERE id=$4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    res.status(200).json({
      success: true,
      results: "put",
      data: response.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
    });
  }
});

router.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const response = await db.query("select * from restaurants where id=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      success: true,
      results: "get by id",
      data: response.rows[0],
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
    });
  }
});

router.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const response = await db.query("DELETE from restaurants where id=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      success: true,
      results: "delete by id",
      data: response.rows[0],
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
    });
  }
});

export default router;
