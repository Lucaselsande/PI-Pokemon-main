const { Op } = require('sequelize');
const { pokemon, type } = require('../db');
const TYPE = type
// name,height,image,thumbnailImage,hp,attack,defense,specialAttack,specialDefense,speed,weight,type
const createPokemon = async(req,res)=>{
    console.log(req.body.type);
try {
    
    const {name,height,image,thumbnailImage,hp,attack,defense,specialAttack,specialDefense,speed,weight,type} = req.body
     const newpokemon = await pokemon.findOrCreate({where:{name,height,image,thumbnailImage,hp,attack,defense,specialAttack,specialDefense,speed,weight}})
     //este bucle es para las relaciones 
     for (let i = 0; i < type.length; i++) {
    const typedb = await TYPE.findOne({where:{name:type[i]}})
    newpokemon[0].addTypes(typedb)
    console.log(typedb.toJSON);
    }
    // const dbPokemon = await pokemon.findOne({
    //     where: {
    //       name: { [Op.iLike]: `%${name}%` }
    //     },
    //     include: {
    //       model: TYPE,
    //       attributes: ["name"],
    //       through: {
    //         attributes: []
    //       }
    //     }
    //   });
    //   if (dbPokemon) {
    //     const formattedPokemon = {
    //       ...dbPokemon.toJSON(),
    //       types: dbPokemon.types.map(type => type.name)
    //     };
        
        res.status(200).json(newpokemon[0])
      

} catch (error) {
    res.status(408).send(error.message)
}
 
}
module.exports = createPokemon