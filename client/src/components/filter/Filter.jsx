import { useDispatch, useSelector } from "react-redux";
import { filterCards } from '../../redux/actions';
import { useState } from "react";

const Filter = () => {

    const dispatch = useDispatch()
    const allTypes = useSelector(state => state.allTypes)

    const [filters, setFilter] = useState({
        Order: 'N',
        Filter: 'ALL',
        Type: 'all'
    })

    const handlechange = (event) => {
        setFilter({
            ...filters,
            [event.target.name]: event.target.value
        })
    }

    // el event.preventDefault para que no se actualize
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(filterCards(filters))
    }

    // lo hice con un formulario para poder apilar filtros de una forma mucho mas facil y ordenada 
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {'Order '}
                <select name='Order' onChange={handlechange}>
                    <option value="N">Normal</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                    <option value="Mayor">Attack{'(+/-)'}</option>
                    <option value="Menor">Attack{'(-/+)'}</option>
                </select>
            </div>

            <div>
                {'Type '}
                <select name="Type" onChange={handlechange}>
                    <option value='all'>All</option>
                    {
                        allTypes.map(elem => {
                            return (
                                <option key={elem} value={elem}>{elem}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div>
                {'Filter '}
                <select name='Filter' onChange={handlechange}>
                    <option value="ALL">All</option>
                    <option value="API">API</option>
                    <option value="DB">DB</option>
                </select>
            </div>


            <button type="submit">Aplicar filtro</button>
        </form>

    )
}

export default Filter
