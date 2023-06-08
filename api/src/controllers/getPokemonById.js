const axios = require('axios');
const { pokemon, type } = require('../db');
const pokemonalldata = require('../utils/pokemonalldata.js')

const URL = 'https://pokeapi.co/api/v2/pokemon/'


const getPokemonById = async (req, res) => {
    try {
    const {id} = req.params
       
    const dbPokemon = await pokemon.findOne({where:{id}})
    if(dbPokemon)res.status(200).json(dbPokemon)
            
    const response = await axios.get(`${URL}${id}`)
    
    const pokemonFound = pokemonalldata(response)
            
    res.status(200).json(pokemonFound)
  
    } catch (error) {
        res.status(403).send(error.message)
    }
}

module.exports = getPokemonById

// const getAllPokemons = async (req, res) => {
//     try {
//         let { id } = req.params
//     const response = await axios.get(`${URL}${id}`)
//     const {name,height,sprites,stats,weight,types} = response.data

//         const idFound = await type.findOne({where:{name:types[0].type.name}})

//     const create = await pokemon.findOrCreate({where:{id,name,height,image:sprites.other['official-artwork'].front_default,thumbnailImage:sprites.front_default,hp:stats[0].base_stat,attack:stats[1].base_stat,defense:stats[2].base_stat,specialAttack:stats[3].base_stat,specialDefense:stats[4].base_stat,speed:stats[5].base_stat,weight,type:idFound.id}})

//     //     const typeFound = type.findOne({where:{name:types[0].name}})
//     //  create.addtype(typeFound)

//     res.status(200).json(create)
   
    

//     } catch (error) {
//         res.status(404).send(error.message)
//     }
// }
