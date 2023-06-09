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
        //primero busco todos los nombres de pokemons
        for (let i = 0; i < 3; i++) {
            const response = await axios.get(`${URL}`)
            allPokemons = [...allPokemons, ...response.data.results]
            URL = response.data.next

        }
        // segundo comparo los nombres de la api con el nombre que viene por query
        for (let e = 0; e < allPokemons.length; e++) {
            if (allPokemons[e].name.includes(name.toLowerCase())) {//lo paso a minusculas para no tener problemas
                const dataPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${allPokemons[e].name}`)
                const Data = pokemonalldata(dataPokemon)//llamo a la funcion que me filtra la info
                allPokemonsData = [...allPokemonsData, Data]
            }
        }
        //busco en la db el nombre
        const dbPokemonsFound = await pokemon.findAll({
            where: {
                name: { [Op.iLike]: `%${name}%` }//con esto le digo que puede haber espacios antes o despues del nombre
            }
        });
        //si encuantra pokemons en la api o en la db los muestra
        if (allPokemonsData.length||dbPokemonsFound.length) return res.status(200).json([...allPokemonsData, ...dbPokemonsFound])
        throw Error('ningun pokemon encontrado')

    } catch (error) {
        res.status(402).send(error.message)
    }


}

module.exports = getPokemonByName