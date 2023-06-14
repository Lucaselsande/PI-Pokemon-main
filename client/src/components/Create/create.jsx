import { useEffect, useState } from "react"
import imagen from '../../imagen/imagen.jpg'
import { useDispatch, useSelector } from "react-redux"
import { crearPokemon, createNumberTypes } from "../../redux/actions"



const Create = () => {

  const dispatch = useDispatch()
  const allTypes = useSelector(state => state.allTypes)
  const numberTypes = useSelector(state => state.numberTypes)

  const numberOfTypes = [1, 2, 3, 4]
  let selectedNumber = numberOfTypes.slice(0, numberTypes)
  let aux = 1
  let arrayTypes = []
  let arrayTypesError = {}

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

  const [typ, settyp] = useState({
  })

  const handlechange = (event) => {
    if(Number(event.target.name)){
      settyp({
        ...typ,
        [event.target.name]: event.target.value
      })
    }else{
      setpokemon({
      ...pokemon,
      [event.target.name]: event.target.value
    })
    }
  }

  useEffect(() => {
    if(typ[1])arrayTypes[0] = typ[1]

    if(typ[2])arrayTypes[1] = typ[2]

    if(typ[3])arrayTypes[2] = typ[3]

    if(typ[4])arrayTypes[3] = typ[4]
    
    setpokemon({
      ...pokemon,
      type: arrayTypes
    })
  }, [typ])

  const handleNumberTypes = (event) => {
    dispatch(createNumberTypes(event.target.value))
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(crearPokemon(pokemon))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label>Name: </label>
        <input type="text" name="name" onChange={handlechange} />

        <div>
          <label>height: </label>
          <input type="range" name="height" min="1" max="100" onChange={handlechange} />
          {pokemon.height}
        </div>

        <div>
          <label>hp: </label>
          <input type="range" name="hp" min="1" max="100" onChange={handlechange} />
          {pokemon.hp}
        </div>

        <div>
          <label>attack: </label>
          <input type="range" name="attack" min="1" max="100" onChange={handlechange} />
          {pokemon.attack}
        </div>

        <div>
          <label>defense: </label>
          <input type="range" name="defense" min="1" max="100" onChange={handlechange} />
          {pokemon.defense}
        </div>

        <div>
          <label>specialAttack: </label>
          <input type="range" name="specialAttack" min="1" max="100" onChange={handlechange} />
          {pokemon.specialAttack}
        </div>

        <div>
          <label>specialDefense: </label>
          <input type="range" name="specialDefense" min="1" max="100" onChange={handlechange} />
          {pokemon.specialDefense}
        </div>

        <div>
          <label>speed: </label>
          <input type="range" name="speed" min="1" max="100" onChange={handlechange} />
          {pokemon.speed}
        </div>

        <div>
          <label>weight: </label>
          <input type="range" name="weight" min="1" max="100" onChange={handlechange} />
          {pokemon.weight}
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
                    <option value='type'>none</option>
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
        </div>

        <button type="submit">Crear pokemon</button>
      </form>



    </div>



  )
}
export default Create


{/* <div>
        Type: 
        <select name='Type' onChange={handlechange}>
          <option value="all">-----</option>
          <option value="normal">normal</option>
          <option value="fighting">fighting</option>
          <option value="flying">flying</option>
          <option value="poison">poison</option>
          <option value="ground">ground</option>
          <option value="rock">rock</option>
          <option value="bug">bug</option>
          <option value="ghost">ghost</option>
          <option value="steel">steel</option>
          <option value="fire">fire</option>
          <option value="water">water</option>
          <option value="grass">grass</option>
          <option value="electric">electric</option>
          <option value="psychic">psychic</option>
          <option value="ice">ice</option>
          <option value="dragon">dragon</option>
          <option value="dark">dark</option>
          <option value="fairy">fairy</option>
          <option value="unknown">unknown</option>
          <option value="shadow">shadow</option>
        </select>
      </div> */}