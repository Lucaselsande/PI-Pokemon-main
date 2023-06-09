const axios = require('axios');
const { pokemon, type } = require('../db');
const {Op} = require('sequelize') 
const pokemonalldata = require('../utils/pokemonalldata.js')

const getAllPokemons = async (req, res) => {
    try {
        let URL = 'https://pokeapi.co/api/v2/pokemon/'
        let allPokemons = []
        let allPokemonsData = []
        //limito el for a 3 iteraciones para que traiga 60 pokemons
       for (let i = 0; i < 3; i++) {
        const response = await axios.get(`${URL}`)
        allPokemons = [...allPokemons,...response.data.results]
        URL = response.data.next
       }
       //el anterior bucle solo agarra los nombres, este busca la informacion de cada uno
        for (let e = 0; e < allPokemons.length; e++) {
                const dataPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${allPokemons[e].name}`)
                //llamo a pokemonalldata para que me filtre la info que quiero mostrar 
                const Data = pokemonalldata(dataPokemon)
                allPokemonsData = [...allPokemonsData,Data]
                
        }
        
        const dbPokemonsFound = await pokemon.findAll();
       
        return res.status(200).json([...allPokemonsData,...dbPokemonsFound])  
        
          
    } catch (error) {
        res.status(402).send(error.message)
    }
        
    
}
module.exports = getAllPokemons
