import sequelize, { Restaurant, RestaurantAvailability } from "./database";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
    Restaurant.create({
        name: "La Casca",
        description: "Consumo en el lugar · Terraza o mesas al aire libre · Retiro desde el coche"
    })

    Restaurant.create({
        name: "El Portal de las Carnes",
        description: "Disfrute de las mejores carnes y vinos en un ambiente único de la ciudad de San Pedro Sula.\n"
    })

    Restaurant.create({
        name: 'Factory Steak & Lobster',
        description: 'Experience the best steak and lobster in San Pedro Sula at Factory Steak and Lobster'
    })


    RestaurantAvailability.create({
        restaurant_id: 1,
        schedule_time: "2023-06-20 08:00:00",
        reserved: false,
        reserved_by: null
    })

    RestaurantAvailability.create({
        restaurant_id: 1,
        schedule_time: "2023-06-20 09:00:00",
        reserved: false,
        reserved_by: null
    })

    RestaurantAvailability.create({
        restaurant_id: 2,
        schedule_time: "2023-06-21 10:00:00",
        reserved: false,
        reserved_by: null
    })

    RestaurantAvailability.create({
        restaurant_id: 2,
        schedule_time: "2023-06-21 11:00:00",
        reserved: false,
        reserved_by: null
    })

    RestaurantAvailability.create({
        restaurant_id: 3,
        schedule_time: "2023-06-22 07:00:00",
        reserved: false,
        reserved_by: null
    })


    RestaurantAvailability.create({
        restaurant_id: 3,
        schedule_time: "2023-06-22 09:00:00",
        reserved: false,
        reserved_by: null
    })

    RestaurantAvailability.create({
        restaurant_id: 1,
        schedule_time: "2021-06-20 08:00:00",
        reserved: false,
        reserved_by: null
    })

    return res.status(200).json({ message: "Hello World" });
});

app.get("/restaurants", async (req, res) => {
    let { limit, offset } = req.query;

    const restaurants = await Restaurant.findAll();


    limit = (limit) ? limit : String(restaurants.length);
    offset = (offset) ? offset : String(0);

    restaurants.slice(Number(offset), Number(offset) + Number(limit));

    return res.status(200).json(restaurants);

});

app.listen(3000, () => {
    sequelize.sync();
    console.log("Server running on port 3000");
});