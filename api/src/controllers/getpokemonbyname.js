const axios = require('axios');
const { pokemon, type } = require('../db');
const { Op } = require('sequelize')
const pokemonalldata = require('../utils/pokemonalldata.js')

const getPokemonByName = async (req, res) => {
    try {
        let URL = 'https://pokeapi.co/api/v2/pokemon/'
        const name = req.query.name
        let allPokemons = []
        let allPokemonsData = []

        // Primero busco todos los nombres de pokemons
        for (let i = 0; i < 3; i++) {
            const response = await axios.get(`${URL}`)
            allPokemons = [...allPokemons, ...response.data.results]
            URL = response.data.next
        }

        // Segundo comparo los nombres de la API con el nombre que viene por query
        for (let e = 0; e < allPokemons.length; e++) {
            if (allPokemons[e].name.includes(name.toLowerCase())) {
                const dataPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${allPokemons[e].name}`)
                const Data = pokemonalldata(dataPokemon)
                allPokemonsData = [...allPokemonsData, Data]
            }
        }

        // Busco en la base de datos el nombre
        const dbPokemonsFound = await pokemon.findAll({
            where: {
                name: { [Op.iLike]: `%${name}%` }
            },
            include: {
                model: type,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
        });

        const formattedPokemons = dbPokemonsFound.map(pokemon => ({
            ...pokemon.toJSON(),
            types: pokemon.types.map(type => type.name)
        }));

        // Si encuentra pokemons en la API o en la base de datos, los muestra
        if (allPokemonsData.length || dbPokemonsFound.length) {
            return res.status(200).json([...allPokemonsData, ...formattedPokemons])
        }
        else { return res.status(404).json({ message: 'No se encontró ningún Pokémon' }) }

    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}


module.exports = getPokemonByName