import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'



const Header = (props) => {
    const navigate = useNavigate();

    return (
        <header>
            <h1 onClick={() => navigate('/')}>This is Rebecca Guay</h1>
        </header>
    )
}


export default Header;