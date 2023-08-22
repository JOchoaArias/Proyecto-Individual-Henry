const { Router } = require('express');
const dogsRouter = require("./dogRoutes")
const temperamentRoutes = require("./temperamentsRoutes")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/dogs", dogsRouter)
router.use("/temperaments", temperamentRoutes)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
