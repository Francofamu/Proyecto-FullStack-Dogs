import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllDogs,
  getAllTemperaments,
  cleanFilteredDogs,
} from "../../redux/actions";

import Navbar from "../../components/navbar/NavBar";
import Header from "../../components/header/header";
import Cards from "../../components/cards/Cards";
import Paginado from "../../components/paginado/paginado";
import "./home.css";

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const filteredDogs = useSelector((state) => state.filteredDogs);
  const [filterDog, setFilterDog] = useState(allDogs);

  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getAllTemperaments());
    return () => {
      dispatch(cleanFilteredDogs());
    };
  }, [dispatch]);

  useEffect(() => {
    if (filteredDogs.length == 0) setFilterDog(allDogs);
    else {
      setFilterDog(filteredDogs);
    }
  }, [allDogs, filteredDogs]);

  
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = filterDog.slice(indexOfFirstDog, indexOfLastDog);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="">
      <Navbar />
      <div className="home">
        <div className="Layout">
          <Header />
          <Paginado 
          currentPage={currentPage}
          totalPages={Math.ceil(filterDog.length / dogsPerPage)}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          />
          <Cards allDogs={currentDogs} />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Home;
