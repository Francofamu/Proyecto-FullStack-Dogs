import { Link } from "react-router-dom";
import "./card.css"

const Card = ({user}) => {

   const {id, name, image, temperaments, weight} = user
   
   return (
      <div className="card-container">
         <Link className="info-link" to={`/detail/${id}`}>
            
            <img className="card-image" src={image} alt="" />
            <h1 className="card-title">{name}</h1>
            <h3 className="card-info">{temperaments.join(", ")}</h3>
            <h3 className="card-info">{weight.join(" - ")} Kg</h3>      
         </Link>
      </div>
   );
}

export default Card;


