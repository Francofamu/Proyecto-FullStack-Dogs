/* components to render */
import Inicio from './views/inicio/inicio';
import Home from './views/home/home';
import Detail from './views/details/details';
import Create from './views/create/create'

/* hooks */
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

/* dependencies */
import axios from "axios";


const App = () => {

  return (
    <div className='App'>      
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/create' element={<Create/>} />
      </Routes>
    </div>
  )
}

  export default App;

//   const [characters, setCharacters] = useState([]);
//   const { pathname } = useLocation(); 
//   const [access, setAccess] = useState(false);
//   const navigate = useNavigate();

//   const onSearch = (id) => {
//     let limitRepeated = [...characters].map((char) => char.id);

//     if (!limitRepeated.includes(Number(id))) {
  
//     axios(`http://localhost:3001/dogs/${id}`)
//     .then(({ data }) => {
//       if (data.name) {
//         setCharacters((oldChars) => [...oldChars, data]);
//       }
//     })
//     .catch(() => {
//       alert('¡No hay personajes con este ID!');
//     })
//   }
// };

//   const onClose = (id) => {
//     const charactersFiltered = characters.filter((character) => {
//       return character.id !== id
//     })

//     setCharacters(charactersFiltered);
//   };


//   useEffect(() => {
//     !access && navigate('/');
//  }, [access]);


