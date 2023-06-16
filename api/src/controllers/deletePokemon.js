const { pokemon } = require('../db');


const deletePokemon = async (req, res) => {
    try {
    const {id} = req.params
    //si pones destroy solo, elimina todo en la db
    const deleted = await pokemon.destroy({where:{id}})
    res.status(200).send('Pokemon eliminado correctamente')
   
    } catch (error) {
        res.status(402).send(error.message)
    }
}


module.exports = deletePokemon