
//esta funcion toma la respuesta de la api y filtra la informacion que quiero
const pokemonAllData = (response)=>{
    
    const {id,name,height,sprites,stats,weight} = response.data
    const pokemonFound = {
        id,
        name,
        height,
        image:sprites.other['official-artwork'].front_default,
        thumbnailImage:sprites.front_default,
        hp:stats[0].base_stat,
        attack:stats[1].base_stat,
        defense:stats[2].base_stat,
        specialAttack:stats[3].base_stat,
        specialDefense:stats[4].base_stat,
        speed:stats[5].base_stat,
        weight
    }
    return pokemonFound
}

module.exports = pokemonAllData

