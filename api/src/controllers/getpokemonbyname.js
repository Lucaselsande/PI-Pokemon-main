const axios = require('axios');
const { pokemon, type } = require('../db');
const {Op} = require('sequelize') 
const pokemonalldata = require('../utils/pokemonalldata.js')

const getPokemonByName = async (req, res) => {
    try {
        let URL = 'https://pokeapi.co/api/v2/pokemon/'
        const name = req.query.name
        let allPokemons = []
        let allPokemonsData = []
        
       for (let i = 0; i < 3; i++) {
        const response = await axios.get(`${URL}`)
        allPokemons = [...allPokemons,...response.data.results]
        URL = response.data.next
        
       }
        for (let e = 0; e < allPokemons.length; e++) {
            if(allPokemons[e].name.includes(name.toLowerCase())){
                const dataPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${allPokemons[e].name}`) 
                const Data = pokemonalldata(dataPokemon)
                allPokemonsData = [...allPokemonsData,Data]
              
           }
        }
        
        const dbPokemonsFound = await pokemon.findAll({
            where:{
               name:{[Op.iLike]:`%${name}%`}
            }
          });
       
        if(allPokemonsData.length)return res.status(200).json([...allPokemonsData,...dbPokemonsFound])  
          throw Error('ningun pokemon encontrado')
          
    } catch (error) {
        res.status(402).send(error.message)
    }
        
    
}

module.exports = getPokemonByName