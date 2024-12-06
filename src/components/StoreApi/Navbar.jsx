import React from "react";
import { Link } from "react-router-dom";

const Navbar =()=>{
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/panier">Panier</Link>
                </li>
                <li>
                    <Link to="/adminform">AdminForm</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar