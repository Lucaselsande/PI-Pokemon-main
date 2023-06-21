const { pokemon, type } = require('../db');
const TYPE = type
// name,height,image,thumbnailImage,hp,attack,defense,specialAttack,specialDefense,speed,weight,type
const createPokemon = async (req, res) => {
    try {

        const { name, height, image, thumbnailImage, hp, attack, defense, specialAttack, specialDefense, speed, weight, type } = req.body

        const pokeFound = await pokemon.findOne({ where: { name } })
        if (pokeFound) return res.status(400).json({ message: `Ese pokemon ya existe en la base de datos` })

        const newpokemon = await pokemon.findOrCreate({ where: { name, height, image, thumbnailImage, hp, attack, defense, specialAttack, specialDefense, speed, weight } })
        console.log(newpokemon)

        //este bucle es para las relaciones 
        for (let i = 0; i < type.length; i++) {
            const typedb = await TYPE.findOne({ where: { name: type[i] } })
            newpokemon[0].addTypes(typedb)
        }
        res.status(200).json(newpokemon[0])


    } catch (error) {
        res.status(408).send({ message: `Error al crear el Pokemons || Error: ${error.message}`})
    }

}
module.exports = createPokemon