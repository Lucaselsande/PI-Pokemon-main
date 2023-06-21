const { pokemon, type } = require('../db');
const TYPE = type



const modifyPokemon = async (req, res) => {

    const { id, name, types, height, hp, attack, defense, specialAttack, specialDefense, speed, weight, } = req.body;
    try {
        const pokemonFound = await pokemon.findOne({where:{id},
            include: {
              model: type,
              attributes: ["name"],
              through: {
                attributes: []
              }
            }})

        if (!pokemonFound) {
            return res.status(404).json({ message: 'Pokemon no encontrado' });
        }
        if(types){
            const removTypes = [...pokemonFound.toJSON().types.map(elem=>elem.name)];
            const typesFound = await TYPE.findAll({where:{name:removTypes}})
        await pokemonFound.removeTypes(typesFound)
            const typesAdd = await TYPE.findAll({where:{name:types}})
        await pokemonFound.addTypes(typesAdd)
        }
        


        const nuevoNombre = name || pokemonFound.nombre;
        const nuevoheight = height || pokemonFound.height;
        const nuevohp = hp || pokemonFound.hp;
        const nuevoattack = attack || pokemonFound.attack;
        const nuevodefense = defense || pokemonFound.defense;
        const nuevospecialAttack = specialAttack || pokemonFound.specialAttack;
        const nuevospecialDefense = specialDefense || pokemonFound.specialDefense;
        const nuevospeed = speed || pokemonFound.speed;
        const nuevoweight = weight || pokemonFound.weight;

        const result = await pokemon.update(
            { name: nuevoNombre, height: nuevoheight, hp: nuevohp, attack: nuevoattack, defense: nuevodefense, specialAttack: nuevospecialAttack, specialDefense: nuevospecialDefense, speed: nuevospeed, weight: nuevoweight },
            { where: { id } }
        );

        if (result[0] === 1) {
            res.status(200).json({ message: 'Pokemon modificado exitosamente' });
        } else {
            res.status(500).json({ message: 'Error al modificar el Pokemon' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al modificar el Pokemon', error });
    }

}
module.exports = modifyPokemon