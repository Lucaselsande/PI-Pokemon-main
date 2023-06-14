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

  const itemsToShow = Pokemons.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(Pokemons.length / itemsPerPage);

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

      <Filter/>
      
      <div className={style.cards}>
{itemsToShow?.map(({ id, name, image, types }) => (
        <Card
          key={id}
          id={id}
          name={name}
          image={image}
          types={types}
          onClose={onClose}
        />
      ))}
      </div>
    </div>
  );
}



// {pokemons?.map(({id,name,height,image,thumbnailImage,hp,attack,defense,specialAttack,specialDefense,speed,weight}) => {
//   return (
  
//       <Card
//         key={id}
//         id={id}
//         name={name}
//         height={height}
//         hp={hp}
//         attack={attack}
//         defense={defense}
//         specialAttack={specialAttack}
//         specialDefense={specialDefense}
//         speed={speed}
//         weight={weight}
//         image={image}
//         thumbnailImage={thumbnailImage}
//         onClose={onClose}
//       />
//      ) 
//    } 
//    )
//   } 