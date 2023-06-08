const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const getPokemonById = require('../controllers/getPokemonById.js');
const getAllTypes = require('../controllers/getalltypes.js');
const deletePokemon = require('../controllers/deletePokemon.js');
const getPokemonHandler = require('../controllers/getpokemonhandler.js')
const createPokemon = require('../controllers/createpokemon.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemon/:id", getPokemonById);
router.get("/pokemon", getPokemonHandler);
router.get("/types", getAllTypes);
router.delete("/delete/:id", deletePokemon);
router.post("/pokemon", createPokemon);

router.all('*', (req, res) => {
    res.status(404).send(`Unknown route: ${req.method} ${req.originalUrl}`);
});


module.exports = router;
