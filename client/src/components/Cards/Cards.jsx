import Card from '../Card/Card.jsx';
import style from './Cards.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { allPokemons, closeCard } from '../../redux/actions.js';
import { useEffect } from 'react';
import { removePokemon } from '../../redux/actions.js';
import { useState } from 'react';
import Filter from '../filter/Filter.jsx';

export default function Cards() {

  const dispatch = useDispatch()
  const Pokemons = useSelector(state => state.Pokemons)

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // modifico el array de pokemons que vienen del state para solo mostrar los correcpondientes a cada pagina
  const itemsToShow = Pokemons.slice(indexOfFirstItem, indexOfLastItem);

  // el ceil es para que no quede ningun pokemon fuera de las paginas
  const totalPages = Math.ceil(Pokemons.length / itemsPerPage);

  // agrego valores a un array para despues hacer un .map y mostrar una pagina por cada valor
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onClose = (id) => {
    dispatch(removePokemon(id))
  };

  useEffect(() => {
    if(totalPages < currentPage){
      setCurrentPage(1)
    }
 }, [totalPages]);

  return (
    <div >
      <div className={style.buttons}>
        <button
          className={currentPage === 1 ? style.disabledPaginationButton : style.paginationButton}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {'<'}
        </button>

        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={pageNumber === currentPage ? style.activePaginationButton : style.paginationButton}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}

        <button
          className={currentPage === pageNumbers[pageNumbers.length - 1] ? style.disabledPaginationButton : style.paginationButton}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pageNumbers[pageNumbers.length - 1]}
        >
          {'>'}
        </button>
      </div>


      <div className={style.container}>
        <div className={style.filterContainer}>
          <Filter />
        </div>
      </div>

      <div className={style.cards}>
        {itemsToShow?.map(({ id, name, image, types }) => (
          <Card
            key={id}
            id={id}
            name={name}
            image={image}
            types={types.join(', ')}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
}