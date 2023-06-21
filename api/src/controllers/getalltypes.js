const axios = require('axios');
const { pokemon, type } = require('../db');


const URL = 'https://pokeapi.co/api/v2/type'

const getAllTypes = async (req, res) => {
    try {
    const response = await axios.get(`${URL}`)
    const {results} = response.data
    let allTypes = []
    //bucle para guardar todos los types en la db, el findOrCreate es para que no se dupliquen
        for (let i = 0; i < results.length; i++) {
          let elem =  await type.findOrCreate({where:{name:results[i].name}})  
          allTypes.push(elem[0].name)
        }
        res.status(200).send(allTypes)
   
    } catch (error) {
        res.status(404).json({ message: `Error al traer Types || Error: ${error.message}`})
    }
}


module.exports = getAllTypes