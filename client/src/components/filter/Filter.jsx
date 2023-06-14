import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from '../../redux/actions';
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


    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(filterCards(filters))
    }

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
                Type 
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
            {/* <div>
                {'Type '}
                <select name='Type' onChange={handlechange}>
                    <option value="all">All</option>
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
