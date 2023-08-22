const { Router } = require("express")
const getTemperaments = require("../controllers/getTemperaments")

const temperamentRoutes = Router();

temperamentRoutes.get("/", getTemperaments)

module.exports = temperamentRoutes;