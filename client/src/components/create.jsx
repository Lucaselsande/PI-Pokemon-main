import { useState } from "react"
import imagen from '../imagen/imagen.jpg'
import { useDispatch } from "react-redux"
import { crearpj } from "../redux/actions"



let id = 900
const Create = ()=>{

  const dispatch = useDispatch()

    const [personaje, setpersonaje] = useState({
        id: id++,
        name: "",
        status: "",
        species: '',
        gender: "",
        origin: {
          name:'hola'
        },
        image: imagen,
      })

    const handlechange = (event) => {
      if(event.target.name === 'origin'){
        setpersonaje({
          ...personaje,
          origin: {name: event.target.value}
        })
      }else{
        setpersonaje({
          ...personaje,
          [event.target.name]: event.target.value
        })
      }
      }


    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(crearpj(personaje))
      }

    return(
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input type="text" name="name" onChange={handlechange} />

            <select name= 'status' onChange={handlechange}>
                <option value="Alive">Alive</option>
                <option value="unknown">unknown</option>
                <option value="Dead">Dead</option>
            </select>

            <select name='species' onChange={handlechange}>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
                <option value="Humanoid">Humanoid</option>
                <option value="Mythological Creature">Mythological Creature</option>
                <option value="Humanoid">Humanoid</option>
            </select>

            <select name='gender' onChange={handlechange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
          
          <label>Origin: </label>
          <input type="text" name="origin" onChange={handlechange} />
          <button type="submit">Crear personaje</button>
        </form>
    
      )
}
export default Create