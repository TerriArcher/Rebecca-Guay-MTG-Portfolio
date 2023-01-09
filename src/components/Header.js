import React from "react";
import { useNavigate,} from "react-router-dom";
import '../App.css'


const Header = (props) => {
    const navigate = useNavigate();

    return (
        <div className="header-wrapper">
          <header>
                <h1 onClick={() => navigate('/')}>This is <br></br>Rebecca Guay</h1>
                <nav>
                    <a href="https://github.com/TerriArcher/TerriArcher"><img src="/icons/github.png" alt="Github Link"/></a>
                    <a href="https://www.linkedin.com/in/terriarcher/"><img src="/icons/linkedIn.png" alt="LinkedIn Link"/></a>
                    <a href="https://twitter.com/TerriTangela"><img src="/icons/twitter.png" alt="Twitter Link"/></a>
                </nav>
            </header>  
        </div>
        
    )
}


export default Header;