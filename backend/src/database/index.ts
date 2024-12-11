import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize("sqlite://database.sqlite");

export class Restaurant extends Model { }

Restaurant.init({
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        unique: true,
    },

}, { sequelize, modelName: "Restaurant" });

export class RestaurantAvailability extends Model { }

RestaurantAvailability.init({
    restaurant_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Restaurant,
            key: "id"
        }
    },

    schedule_time: {
        type: DataTypes.DATE,
    },

    reserved: {
        type: DataTypes.BOOLEAN,
    },

    reserved_by: {
        type: DataTypes.STRING,
    },
}, { sequelize, modelName: "RestaurantAvailability" });


export default sequelize;