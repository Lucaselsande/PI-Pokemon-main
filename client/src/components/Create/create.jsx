import { useEffect, useState } from "react"
import imagen from '../../imagen/imagen.jpg'
import { useDispatch, useSelector } from "react-redux"
import { crearPokemon, createNumberTypes } from "../../redux/actions"
import validationStats from "../../validations/validationStats"
import validationTypes from "../../validations/validationTypes"
import { useNavigate } from "react-router-dom";
import styles from './createStyle.module.css'


const Create = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const allTypes = useSelector(state => state.allTypes)
  const numberTypes = useSelector(state => state.numberTypes)
  const allPokemons = useSelector(state => state.PokeSinFiltro)

  // declaro la cantidad maxima de types por pokemon
  const numberOfTypes = [1, 2, 3, 4]
  // asigno la cantidad de types que yo quiera
  let selectedNumber = numberOfTypes.slice(0, numberTypes)
  let aux = 1

  const [pokemon, setpokemon] = useState({
    name: "",
    height: "50",
    hp: '50',
    attack: "50",
    defense: "50",
    specialAttack: "50",
    specialDefense: "50",
    speed: '50',
    weight: "50",
    type: [],
    image: imagen,
    thumbnailImage: imagen,
  })

  const [typ, settyp] = useState({})
  const [typeErr, setTypeErr] = useState({})
  const [statsErr, setStatsErr] = useState({})
  const [errors, setErrors] = useState('')




  const handlechange = (event) => {
    // pregunto si se puede convertir a numero por que el event.target.name de types es numero
    if (Number(event.target.name)) {
      settyp({
        ...typ,
        [event.target.name]: event.target.value
      })
    } else {
      setpokemon({
        ...pokemon,
        [event.target.name]: event.target.value
      })
    }
  }

  useEffect(() => {
    //valido typ siempre que se actualizan sus valores
    let { errors, arrayTypes } = validationTypes(typ)
    // suma = arrayTypes
    setTypeErr(errors)
    setpokemon({
      ...pokemon,
      type: arrayTypes
    })
  }, [typ])

  useEffect(() => {
    // valido los stats del pokemon siempre que cambien
    setStatsErr(validationStats(pokemon,allPokemons))
  }, [pokemon])

  useEffect(() => {
    // estoy atento a los cambios en los errores y los junto si los hay 
    if (Object.keys(typeErr).length === 0 && Object.keys(statsErr).length === 0) {
      setErrors('bien')
    } else {
      setErrors({
        1: typeErr,
        2: statsErr
      })
    }

  }, [statsErr, typeErr])

  useEffect(() => {
    dispatch(createNumberTypes(1))
  }, [])

  const handleNumberTypes = (event) => {
    // a esto le hice un dispatch para que se actualize, trate de hacerlo con un useEfect pero no me fue bien
    dispatch(createNumberTypes(event.target.value))
  }


  const handleSubmit = async (event) => {
    // si hay errores no se mandan los datos para crear
    // si no los hay refresca la pagina para que ya traiga de la db el creado y te redirige a /home
    if (errors !== 'bien') {
      event.preventDefault()
      window.alert('Datos incorrectos')
    }
    else {
      dispatch(crearPokemon(pokemon))
      window.alert('Pokemon creado correctamente')
      navigate("/home")
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>

          <label>Name: </label>
          <input type="text" name="name" onChange={handlechange} />
          {<p>{statsErr ? statsErr[0] : ''}</p>}

          <div>
            <label>height: </label>
            <input type="range" name="height" min="1" max="150" onChange={handlechange} />
            {pokemon.height}
            <p>{statsErr ? statsErr[1] : ''}</p>

          </div>

          <div>
            <label>hp: </label>
            <input type="text" name="hp" onChange={handlechange} />
            <p>{statsErr ? statsErr[2] : ''}</p>
          </div>
          {/* <div>
            <label>hp: </label>
            <input type="range" name="hp" min="1" max="150" onChange={handlechange} />
            {pokemon.hp}
            <p>{statsErr ? statsErr[2] : ''}</p>
          </div> */}

          <div>
            <label>attack: </label>
            <input type="range" name="attack" min="1" max="150" onChange={handlechange} />
            {pokemon.attack}
            <p>{statsErr ? statsErr[3] : ''}</p>
          </div>

          <div>
            <label>defense: </label>
            <input type="range" name="defense" min="1" max="150" onChange={handlechange} />
            {pokemon.defense}
            <p>{statsErr ? statsErr[4] : ''}</p>
          </div>

          <div>
            <label>specialAttack: </label>
            <input type="range" name="specialAttack" min="1" max="150" onChange={handlechange} />
            {pokemon.specialAttack}
            <p>{statsErr ? statsErr[5] : ''}</p>
          </div>

          <div>
            <label>specialDefense: </label>
            <input type="range" name="specialDefense" min="1" max="150" onChange={handlechange} />
            {pokemon.specialDefense}
            <p>{statsErr ? statsErr[6] : ''}</p>
          </div>

          <div>
            <label>speed: </label>
            <input type="range" name="speed" min="1" max="150" onChange={handlechange} />
            {pokemon.speed}
            <p>{statsErr ? statsErr[7] : ''}</p>
          </div>

          <div>
            <label>weight: </label>
            <input type="range" name="weight" min="1" max="150" onChange={handlechange} />
            {pokemon.weight}
            <p>{statsErr ? statsErr[8] : ''}</p>
          </div>

          <div>
            Types:
            <select name='numberTypes' onChange={handleNumberTypes}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>

            {// muestro la cantidad de selectores de types que yo quiera
              selectedNumber.map(elem => {

                return (
                  <div key={elem}>
                    <select name={aux++} onChange={handlechange}>
                      <option value='undefined'>undefined</option>
                      {// muestro todos los types de pokemons
                        allTypes.map(elem => {
                          return (
                            <option key={elem} value={elem}>{elem}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                )
              }
              )
            }
            {
              // si hay errores los muestro
            }
            <p>{typeErr[0] && typeErr[0]}</p>
            <p>{typeErr[1] && typeErr[1]}</p>
            <p>{typeErr[2] && typeErr[2]}</p>
            <p>{typeErr[3] && typeErr[3]}</p>

          </div>
        </div>

        <button type="submit" >Crear pokemon</button>
      </form>



    </div>



  )
}
export default Create;
