import { useEffect, useState } from "react"
import imagen from '../../imagen/imagen.jpg'
import imagen2 from '../../imagen/imagen2.jpg'
import { useDispatch, useSelector } from "react-redux"
import { crearPokemon, createNumberTypes } from "../../redux/actions"
import validationStats from "../../validations/validationStats"
import validationTypes from "../../validations/validationTypes"
import { useNavigate } from "react-router-dom";


const Create = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const allTypes = useSelector(state => state.allTypes)
  const numberTypes = useSelector(state => state.numberTypes)

  const numberOfTypes = [1, 2, 3, 4]
  let selectedNumber = numberOfTypes.slice(0, numberTypes)
  let aux = 1
  let suma = 1

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
    let { errors, arrayTypes } = validationTypes(typ)
    suma = arrayTypes
    setTypeErr(errors)
    setpokemon({
      ...pokemon,
      type: arrayTypes
    })

  }, [typ])

  useEffect(() => {
    setStatsErr(validationStats(pokemon))
  }, [pokemon])

  useEffect(() => {
    if (Object.keys(typeErr).length === 0 && Object.keys(statsErr).length === 0) {
      setErrors('bien')
    } else {
      setErrors({
        1: typeErr,
        2: statsErr
      })
    }

  }, [statsErr, typeErr])

  const handleNumberTypes = (event) => {
    dispatch(createNumberTypes(event.target.value))
  }


  const handleSubmit = async (event) => {
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
    <div>
      <form onSubmit={handleSubmit}>

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
          <input type="range" name="hp" min="1" max="150" onChange={handlechange} />
          {pokemon.hp}
          <p>{statsErr ? statsErr[2] : ''}</p>
        </div>

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

          {
            selectedNumber.map(elem => {

              return (
                <div key={elem}>
                  <select name={aux++} onChange={handlechange}>
                    <option value='type'>undefined</option>
                    {
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
          <p>{typeErr[0] && typeErr[0]}</p>
          <p>{typeErr[1] && typeErr[1]}</p>
          <p>{typeErr[2] && typeErr[2]}</p>
          <p>{typeErr[3] && typeErr[3]}</p>

        </div>

        <button type="submit" >Crear pokemon</button>
        {/* disabled={Object.keys(typeErr).length !== 0} */}
      </form>



    </div>



  )
}
export default Create;
