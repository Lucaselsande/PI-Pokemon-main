const axios = require('axios');
const { pokemon, type } = require('../db');
const {Op} = require('sequelize') 
const pokemonalldata = require('../utils/pokemonalldata.js')

const getAllPokemons = async (req, res) => {
    try {
        let URL = 'https://pokeapi.co/api/v2/pokemon/'
        let allPokemons = []
        let allPokemonsData = []
        
       for (let i = 0; i < 3; i++) {
        const response = await axios.get(`${URL}`)
        allPokemons = [...allPokemons,...response.data.results]
        URL = response.data.next
        
       }
        for (let e = 0; e < allPokemons.length; e++) {
                const dataPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${allPokemons[e].name}`) 
                const Data = pokemonalldata(dataPokemon)
                allPokemonsData = [...allPokemonsData,Data]
                console.log(e)
        }
        
        const dbPokemonsFound = await pokemon.findAll();
       
        return res.status(200).json([...allPokemonsData,...dbPokemonsFound])  
        
          
    } catch (error) {
        res.status(402).send(error.message)
    }
        
    
}
module.exports = getAllPokemons
