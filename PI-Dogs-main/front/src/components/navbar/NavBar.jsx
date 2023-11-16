import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cleanFilteredDogs } from "../../redux/actions";
import "./navBar.css"

const Nav = () => {

    const handleHomeClick = () => {
        useDispatch(cleanFilteredDogs())}
    
    return(
        <nav>
            <div></div>
            <div className="logo-home">

                <Link to="/home" className="navbar-button-home" onClick={handleHomeClick}>
                    <img src="https://img.icons8.com/fluency-systems-filled/48/dog-footprint.png" alt="dog-footprint"/>
                    <h1> Dogs Home </h1>
                    <img src="https://img.icons8.com/fluency-systems-filled/48/dog-footprint.png" alt="footprint-dog-image"/>
                </Link>
            </div>

            <div className="logo-create">
                <Link to="/create" className="navbar-button-create">
                    <h1> Create Dog </h1>
                    <img src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/32/external-Dog-pet-shop-jumpicon-(glyph)-jumpicon-glyph-ayub-irawan.png" alt="dog-image"/>
                </Link>
            </div>
        </nav>
        
    )
}

export default Nav;