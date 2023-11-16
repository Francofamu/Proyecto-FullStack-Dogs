import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/NavBar"
import { cleanDetail, dogDetail } from "../../redux/actions";
import "./details.css"

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dogById = useSelector(state => state.dogDetail)


  useEffect(()=> {
    dispatch(dogDetail(id))
    return () => {
      dispatch(cleanDetail())
    }
  },[dispatch,id])
    
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="image-container">
          <img className="card-image-detail" src={dogById.image} alt="" />
        </div>
        <div className="information-container">
          <h1 className="detail-name">{dogById.name}</h1>
          <h2 className="detail-info">Temperamentos: {dogById.temperaments}</h2>
          <h2 className="detail-info">Peso: {dogById.weight}</h2>
          <h2 className="detail-info">Altura: {dogById.height}</h2>
          <h2 className="detail-info">Años de vida: {dogById.life_span}</h2>
          <h2 className="id">{dogById.id}</h2>
        </div>
      </div>
    </div>
  );
};

export default Detail;