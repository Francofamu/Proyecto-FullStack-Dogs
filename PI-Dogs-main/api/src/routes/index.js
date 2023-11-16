const { Router } = require('express');

// Handlers
const getAllDogsHandler = require('../handlers/getAllDogsHandler');
const getDogByIdHandler = require('../handlers/getDogByIdHandler');
const getAllTemperamentsHandler = require('../handlers/getAllTemperaments');
const getDogByNameHandler = require('../handlers/getDogByNameHandler');
const createDogHandler = require('../handlers/createDogHandler');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();


/* routes */
router.get("/dogs/name",getDogByNameHandler);
router.get("/dogs/:idRaza",getDogByIdHandler);
router.get("/dogs", getAllDogsHandler);
router.post("/dogs", createDogHandler);
router.get("/temperaments", getAllTemperamentsHandler);


module.exports = router;
