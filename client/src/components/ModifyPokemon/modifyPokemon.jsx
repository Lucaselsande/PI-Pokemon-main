import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ModifyPoke, dbPokemons } from "../../redux/actions"
import style from './modifyPokemonStyle.module.css';
import validationTypes from "../../validations/validationTypes";
import validationStats from "../../validations/validationStats";





const ModifyPokemon = () => {

    useEffect(() => {
        dispatch(dbPokemons());
    }, []);

    const dispatch = useDispatch();
    const pokemonsdb = useSelector((state) => state.pokemonsdb);
    const allTypes = useSelector((state) => state.allTypes);
    const [dbId, setDbId] = useState(null);
    const [pokeFound, setPokeFound] = useState(null);
    const [dbModify, setDbModify] = useState({});
    const [typeErr, setTypeErr] = useState({})




    const handleSelect = (event) => {
        setDbId(event.target.value);
        setDbModify({
            ...dbModify,
            id: event.target.value,
        });
    };


    const handlechange = (event) => {
        setDbModify({
            ...dbModify,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        if (dbId && dbId !== 'null') {
            let pokemonsdbCopy = [...pokemonsdb]
            setPokeFound(pokemonsdbCopy.filter(elem => elem.id.includes(dbId)))
        } else {
            setPokeFound(null)
        }
    }, [dbId]);

    const handleMultiple = (event) => {
        const option = event.target.options

        const selectedValues = [8]
        for (let i = 0; i < option.length; i++) {
            if (option[i].selected) {
                selectedValues.push(option[i].value)
            }
        }
        if (selectedValues.length < 6) {
            let { errors, arrayTypes } = validationTypes(selectedValues)
            setTypeErr(errors)

            setDbModify({
                ...dbModify,
                types: arrayTypes
            })
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault()
        dispatch(ModifyPoke(dbModify))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={style.cont}>
                <select name="id" id="" onChange={handleSelect}>
                    <option value="null">Select pokemon ID</option>
                    {pokemonsdb.map(({ id }) => (

                        <option key={id} value={id}>{id}</option>

                    ))}
                </select>
                {
                    pokeFound && (
                        <div key={pokeFound[0].id}>
                            <h2>Name: {pokeFound[0].name}</h2>
                            <input type="text" name={'name'} onChange={handlechange} />
                            <h2>Height: {pokeFound[0].height}</h2>
                            <input type="text" name={'height'} onChange={handlechange} />
                            <h2>HP: {pokeFound[0].hp}</h2>
                            <input type="text" name={'hp'} onChange={handlechange} />
                            <h2>Attack: {pokeFound[0].attack}</h2>
                            <input type="text" name={'attack'} onChange={handlechange} />
                            <h2>Defense: {pokeFound[0].defense}</h2>
                            <input type="text" name={'defense'} onChange={handlechange} />
                            <h2>Special Attack: {pokeFound[0].specialAttack}</h2>
                            <input type="text" name={'specialAttack'} onChange={handlechange} />
                            <h2>Special Defense: {pokeFound[0].specialDefense}</h2>
                            <input type="text" name={'specialDefense'} onChange={handlechange} />
                            <h2>Speed: {pokeFound[0].speed}</h2>
                            <input type="text" name={'speed'} onChange={handlechange} />
                            <h2>Weight: {pokeFound[0].weight}</h2>
                            <input type="text" name={'weight'} onChange={handlechange} />
                            <h2>Types: {pokeFound[0].types?.join(', ')}</h2>
                            <h4>Ctrl + Click para seleccionar</h4>
                            <select multiple size={10} value={dbModify.types} onChange={handleMultiple}>
                                {
                                    allTypes.map(elem => (
                                        <option key={elem} value={elem}>{elem}</option>
                                    ))
                                }
                            </select>
                            <p>{typeErr[0] && typeErr[0]}</p>
                            <p>{typeErr[1] && typeErr[1]}</p>
                            <p>{typeErr[2] && typeErr[2]}</p>
                            <p>{typeErr[3] && typeErr[3]}</p>

                        </div>)
                }
            </div>
            <button type="submit" >Modify pokemon</button>
        </form>

    )
}
export default ModifyPokemon