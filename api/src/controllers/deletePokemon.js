const { pokemon } = require('../db');


const deletePokemon = async (req, res) => {
    try {
    const {id} = req.params
    //si pones destroy solo, elimina todo en la db
    const deleted = await pokemon.destroy({where:{id}})
        console.log(deleted)
    if(deleted === 1) return res.status(200).send('Pokemon eliminado correctamente')
    return res.status(400).json({ message: `Error al eliminar el Pokemon || Error: ${error.message}`})
    
    } catch (error) {
        res.status(400).json({ message: `Error al eliminar el Pokemon || Error: ${error.message}`})
    }
}


module.exports = deletePokemon