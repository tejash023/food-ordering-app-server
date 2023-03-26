import express from "express";

import { getRestaurant, getMenu } from "../controller/api-controller.js";

const routes = express.Router();

routes.get("/restaurants", getRestaurant);

routes.get("/menu", getMenu);

export default routes;
