import Card from './Card.jsx';
import style from './styles/Todos.module.css'


export default function Cards ({ characters, onClose }) {
  console.log(characters)
  if(!characters.length)return
  return (
    <div className={style.cards}>
    

      {characters?.map(({id,name,height,image,thumbnailImage,hp,attack,defense,specialAttack,specialDefense,speed,weight}) => {
      return (
      
          <Card
            key={id}
            id={id}
            name={name}
            height={height}
            hp={hp}
            attack={attack}
            defense={defense}
            specialAttack={specialAttack}
            specialDefense={specialDefense}
            speed={speed}
            weight={weight}
            image={image}
            thumbnailImage={thumbnailImage}
            onClose={onClose}
          />
         ) 
       } 
       )
      } 
      

    
  </div>
      )
     
    

    

  
}


