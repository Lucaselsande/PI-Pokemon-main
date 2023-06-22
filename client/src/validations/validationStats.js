const validationStats = ({ name, height, hp, attack, defense, specialAttack, specialDefense, speed, weight }, allPokemons) => {

    let repetido = allPokemons.filter(elem => elem.name === name)

    let statsErr = {}
    // valido el nombre y los stats
    if (name.length < 3) {
        statsErr[0] = '* mas caracteres'
    }

    if (name.length > 20) {
        statsErr[0] = '* muchos caracteres'
    }

    if (Number(name)) {
        statsErr[0] = 'name no puede ser unicamente numeros'
    }

    if (repetido.length) {
        statsErr[0] = 'Ese pokemon ya existe'
    }

    if (height < 1 || height > 150) {
        statsErr[1] = 'height no valido'
    }

    if (hp < 1 || hp > 150) {
        statsErr[2] = 'hp no valido'
    }

    if (attack < 1 || attack > 150) {
        statsErr[3] = 'attack no valido'
    }

    if (defense < 1 || defense > 150) {
        statsErr[4] = 'defense no valido'
    }
    
    if (specialAttack < 1 || specialAttack > 150) {
        statsErr[5] = 'specialAttack no valido'
    }

    if (specialDefense < 1 || specialDefense > 150) {
        statsErr[6] = 'specialDefense no valido'
    }

    if (speed < 1 || speed > 150) {
        statsErr[7] = 'speed no valido'
    }

    if (weight < 1 || weight > 150) {
        statsErr[8] = 'weight no valido'
    }

    return statsErr


}
export default validationStats