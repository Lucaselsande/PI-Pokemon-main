const axios = require('axios');
const { pokemon, type } = require('../db');
const pokemonalldata = require('../utils/pokemonalldata.js');

const URL = 'https://pokeapi.co/api/v2/pokemon/'


const getPokemonById = async (req, res) => {
    try {
        const {id} = req.params
        if(!Number(id)){//esto es para que se fije si es id sacado de la api o de la db
          const dbPokemon = await pokemon.findOne({where:{id},
            include: {
              model: type,
              attributes: ["name"],
              through: {
                attributes: []
              }
            }})
            //esto quita el .name de types y lo deja mas ordenado
          // const formattedPokemons = dbPokemon.map(pokemon => ({
          //   ...pokemon.toJSON(),
          //   types: pokemon.types.map(type => type.name)
          // }));
                const formattedPokemon = {
                  ...dbPokemon.toJSON(),
                  types: dbPokemon.types.map(type => type.name)
                };
        return res.status(200).json(formattedPokemon)  // los return para que corten
        }
    
        const response = await axios.get(`${URL}${id}`)
        if(Object.keys(response).length){
          const pokemonFound = pokemonalldata(response)//aca mando la response para que la funcion me filtre lo que es necesario 
        return res.status(200).json(pokemonFound)
        }
        throw new Error(`No existe pokemon con id ${id}`)
    } catch (error) {
       return res.status(403).json({error:`No existe pokemon con ese id`})
    }
}

module.exports = getPokemonById