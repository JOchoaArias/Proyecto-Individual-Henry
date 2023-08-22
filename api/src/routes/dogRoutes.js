const { Router } = require("express")
const getDogs = require("../controllers/getDogs")
const getDogById = require("../controllers/getDogById")
const getDogsByName = require("../controllers/getDogsByName")
const postDog = require("../controllers/postDog")

const dogsRouter = Router();

dogsRouter.get("/", getDogs)
dogsRouter.get("/name", getDogsByName)
dogsRouter.get("/:id", getDogById)
dogsRouter.post("/", postDog)

module.exports = dogsRouter;