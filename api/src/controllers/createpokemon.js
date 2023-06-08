const { pokemon, type } = require('../db');
const TYPE = type
// name,height,image,thumbnailImage,hp,attack,defense,specialAttack,specialDefense,speed,weight,type
const createPokemon = async(req,res)=>{
try {
     const {name,height,image,thumbnailImage,hp,attack,defense,specialAttack,specialDefense,speed,weight,type} = req.body
     const newpokemon = await pokemon.findOrCreate({where:{name,height,image,thumbnailImage,hp,attack,defense,specialAttack,specialDefense,speed,weight}})
     for (let i = 0; i < type.length; i++) {
    const typedb = await TYPE.findOne({where:{name:type[i]}})
    newpokemon[0].addTypes(typedb)
     }
     
    res.status(200).json(newpokemon)
} catch (error) {
    res.status(408).send(error.message)
}
 
}
module.exports = createPokemon