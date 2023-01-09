import React from "react";
import { data } from "../utils/home-elements";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeAnimation = keyframes`${fadeIn}`;

const StyledPromo = styled.div`
    .a{
        animation: 2s ${fadeAnimation} ease-in; 
    }
    .b{
        animation: 2s ${fadeAnimation} ease-in; 
        animation-delay: 500ms;
        animation-fill-mode: both;
    }

    .c{
        animation: 2s ${fadeAnimation} ease-in; 
        animation-delay: 800ms;
        animation-fill-mode: both;
    }
    
`;

const Home = () => {
    const navigate = useNavigate();

    return(
        <div className="home-outer">
           <div className="home-heading" onClick={() => navigate('/cards')}>
                <img src="/icons/mana/white-mana.png" alt="white mana"/><img src="/icons/mana/colorless-mana.png" alt="colorless mana"/><img src="/icons/mana/black-mana.png" alt="black mana"/>
                <h2>{data.heading}</h2>
                <img src="/icons/mana/blue-mana.png" alt="blue mana"/><img src="/icons/mana/red-mana.png" alt="red mana"/><img src="/icons/mana/green-mana.png" alt="green mana"/>
            </div>
            
            <div className="home-inner">
                <div className="info">
                    <div className="description">
                        <h4 className="content">{data.message}</h4>
                        <p className='content'>{data.message2}</p>
                    </div>
                    <StyledPromo className="promo">
                        <img src={data.image2} className="home-card b" alt="Elspeth, Sun's Champion MTG card"></img>
                        <img src={data.image1} className="home-card a" alt="Abundance MTG card"></img>
                        <img src={data.image3} className="home-card c" alt="Hair-Strung Koto MTG card"></img>
                    </StyledPromo>
                </div>
            </div>
        </div>
    )
}

export default Home