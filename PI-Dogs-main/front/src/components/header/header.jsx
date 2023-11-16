import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogsByOrigin, filterDogsByTemperament, orderBy } from "../../redux/actions";
import SearchBar from "../searchbar/SearchBar";

import "./header.css"

const Header = ({onSearch}) => {

    const dispatch = useDispatch();
    const temperaments = useSelector(state => state.temperaments);
    const [selectedTemperament, setSelectedTemperament] = useState('');

  
    const handleOriginChange = (event) => {
      const origin = event.target.value;
      dispatch(getDogsByOrigin(origin));
    };

    const handleTemperamentChange = (event) => {
        const selectedValue = event.target.value
        setSelectedTemperament(selectedValue);
        dispatch(filterDogsByTemperament(selectedValue));
      };
    
    const handleOrderByAlphabetic = (e) => {
        dispatch(orderBy(e.target.value));
    }
    
    const handleOrderByWeight = (e) => {
        console.log(e.target.value)
        dispatch(orderBy(e.target.value));
    }

    return(
        <div className="header">
            <div>
                <select onChange={handleOriginChange}>
                <option value="">Seleccionar origen</option>
                <option value="api">API</option>
                <option value="db">DB</option>
                </select>
      
            </div>
        
            <select onChange={handleTemperamentChange}>
                <option value="">Seleccionar temperamento</option>
                {temperaments.map((temperament) => (
                <option key={temperament} value={temperament}>
                    {temperament}
                </option>
                ))}
            </select>                    
      
            <SearchBar onSearch={onSearch} />

            <select onChange={handleOrderByAlphabetic}>
                <option value="A-Z">A - Z</option>
                <option value="Z-A">Z - A</option>
           </select>

           <select onChange={handleOrderByWeight}>
                <option value="asc">Peso</option>
                <option value="asc">Min-Max</option>
                <option value="desc">Max-Min</option>
           </select>
        </div>
    )
}

export default Header;