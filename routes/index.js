import express from "express";

import { getRestaurant, getMenu } from "../controller/api-controller.js";

const routes = express.Router();

routes.get("/api/restaurants", getRestaurant);

routes.get("/api/menu", getMenu);

export default routes;
