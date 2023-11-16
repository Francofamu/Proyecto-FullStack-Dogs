import Card from '../card/Card';
import "./cards.css"

const Cards = ({allDogs}) => {

   const dogsList = allDogs


   return(
      <div className='cards-container'>
         {dogsList?.map((dog) =>(
         <Card key ={dog.id} user = {dog}/>
         ))}

      </div>
   )
}

export default Cards;