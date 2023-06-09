const getAllPokemons = require('./getallpokemons.js');
const getPokemonByName = require('./getpokemonbyname.js');

//handler para ambas funciones, les paso (req,res) para que funcionen correctamente
const getPokemonHandler = async (req,res)=>{
     
     if(req.query.name)return await getPokemonByName(req,res)
   
     return await getAllPokemons(req,res);

}
module.exports = getPokemonHandler