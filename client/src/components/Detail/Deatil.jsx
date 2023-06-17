import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import style from './Deatil.module.css'

const Deatil = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({})

    //traigo el pokemon por id, podria modularizarlo

    useEffect(() => {
        try {
            axios(`http://localhost:3001/pokemon/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setPokemon(data);
                } else {
                    window.alert('No hay pokemon con ese ID');
                }
            });
            return setPokemon({})
        } catch (error) {
            window.alert(error.message)
        }
        
        ;
    }, [id])
    
    return (
        <div className={style.pokemonDetails}>
            <div className={style.textContainer}>
                <h2>Name: {pokemon.name}</h2>
                <h2>Height: {pokemon.height}</h2>
                <h2>HP: {pokemon.hp}</h2>
                <h2>Attack: {pokemon.attack}</h2>
                <h2>Defense: {pokemon.defense}</h2>
                <h2>Special Attack: {pokemon.specialAttack}</h2>
                <h2>Special Defense: {pokemon.specialDefense}</h2>
                <h2>Speed: {pokemon.speed}</h2>
                <h2>Weight: {pokemon.weight}</h2>
                <h2>Types: {pokemon.types?.join(', ')}</h2>
            </div>
            <div className={style.imagesContainer}>
                <img src={pokemon.image} alt='' className={style.pokemonImage} />
            </div>
            <div className={style.backgroundImageContainer}>
                <img src={pokemon.thumbnailImage} alt='' className={style.backgroundImage} />
            </div>
        </div>


    )
}
export default Deatil