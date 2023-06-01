const express = require('express');
const router = express.Router();
const { getAllPokemon, getPokemonById, getPokemonByName, getPokemonByType, createPokemon, updatePokemon } = require('../../controllers/pokedexControllers');
const authenticateToken = require('../../middleware/authenticateMiddle')

router
    .get('/', getAllPokemon)
    .get('/:id', getPokemonById)
    .get('/:name', getPokemonByName)
    .get('/:type', getPokemonByType)
    .post('/', authenticateToken, createPokemon)
    .put('/:id', authenticateToken, updatePokemon)
;
module.exports = router;