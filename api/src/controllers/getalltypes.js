const axios = require('axios');
const { pokemon, type } = require('../db');


const URL = 'https://pokeapi.co/api/v2/type'

const getAllTypes = async (req, res) => {
    try {
    const response = await axios.get(`${URL}`)
    const {results} = response.data
    //bucle para guardar todos los types en la db
        for (let i = 0; i < results.length; i++) {
            await type.create({name:results[i].name})  
        }
        res.status(200).send('ready')
   
    } catch (error) {
        res.status(404).send(error.message)
    }
}


module.exports = getAllTypes