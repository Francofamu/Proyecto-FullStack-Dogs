import { useState } from "react";
import "./searchbar.css";
import { useDispatch } from "react-redux";
import { cleanFilteredDogs, getDogByName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    if (name.trim() === "") {
    }
  };

  const handleBlur = () => {
    if (name.trim() === "") {
      dispatch(cleanFilteredDogs());
    }
  }; 

  const handleSearch = async () => {
       dispatch(getDogByName(name));
  };

  return (
    <div className="search-box">
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        type="search"
        placeholder="Ingresar nombre del perro..."
        value={name}
      />
      <button onClick={handleSearch}>Buscar</button>

    </div>
  );
};

export default SearchBar;
