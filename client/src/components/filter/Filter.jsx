import { useDispatch } from "react-redux";
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from "react";




const Filter = () => {

    const dispatch = useDispatch()

    const [filters, setFilter] = useState({
        Order: 'N',
        Filter: 'ALL',
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
            <select name='Order' onChange={handlechange}>
                <option value="N">Normal</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select name='Filter' onChange={handlechange}>
                <option value="ALL">All</option>
                <option value="API">API</option>
                <option value="DB">DB</option>
            </select>
            <button type="submit">Aplicar filtro</button>
        </form>

    )
}

// const Filter = ()=>{

//     const dispatch = useDispatch();

//     const handleOrder = (event) => {
//         dispatch(orderCards(event.target.value));
//     };
//     const handleFilter = (event) => {
//         dispatch(filterCards(event.target.value))
//     };
//     return (
//         <div>
//             <select onChange={handleOrder}>
//                 <option value="N">Normal</option>
//                 <option value="A">Ascendente</option>
//                 <option value="D">Descendente</option>
//             </select>
//             <select onChange={handleFilter}>
//                 <option value="ALL">All</option>
//                 <option value="API">API</option>
//                 <option value="DB">DB</option>
//             </select>


//         </div>

//     )
// };
export default Filter
