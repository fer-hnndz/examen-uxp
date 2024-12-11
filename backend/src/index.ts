import sequelize, { Restaurant, RestaurantAvailability } from "./database";
import { Op } from "sequelize";
import express, { Request, Response, } from "express";
import cors from "cors";
import dayjs from "dayjs";

const app = express();
app.use(cors());

app.get("/restaurants", async (req, res) => {
    let { limit, offset } = req.query;

    let restaurants = await Restaurant.findAll();


    limit = (limit) ? limit : String(restaurants.length);
    offset = (offset) ? offset : String(0);

    return res.status(200).json(restaurants);

});

app.get("/restaurants/availability", async (req, res) => {
    const today = dayjs();

    const l = RestaurantAvailability.findAll({
        schedule_time: {
            [Op.gte]: today.toDate()
        }
    })


    return res.status(200).json(l);

})

app.listen(3000, () => {
    sequelize.sync();
    console.log("Server running on port 3000");
});