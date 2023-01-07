import React from "react";
import { data } from "../utils/home-elements";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";

const fadeAnimation = keyframes`${fadeInUp}`;

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
    return(
        <div className="home-outer">
            <h2>{data.heading}</h2>
            <div className="home-inner">
                <div className="description">
                    <p className="content">{data.message}</p>
                    <p className='content'>{data.message2}</p>
                </div>
                <Link to='/cards'><button className="button-17">Start browsing</button></Link>
                <StyledPromo className="promo">
                    <img src={data.image1} className="home-card a"></img>
                    <img src={data.image2} className="home-card b"></img>
                    <img src={data.image3} className="home-card c"></img>
                </StyledPromo>
            </div>
        </div>
    )
}

export default Home