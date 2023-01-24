import express from "express";
const app = express();

app.get('/api/v1/restaurants/:restaurantid', (req, res) => {
    console.log(req.params)
});

app.delete('/api/v1/restaurants/:restaurantid', (req, res) => {
    console.log(req.params)
});