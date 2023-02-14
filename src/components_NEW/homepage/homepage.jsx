import React from "react";
import './homepage.css'
import { useNavigate } from "react-router-dom";



export default function Home () {
    const navigate = useNavigate();

    const iconRow1 = [
        "/icons/mana/black-mana.png",
        "/icons/mana/colorless-mana.png",
        "/icons/mana/blue-mana.png",
    ]

    const iconRow2 = [
        "/icons/mana/red-mana.png",
        "/icons/mana/white-mana.png",
        "/icons/mana/green-mana.png",
    ]

    return (
        <div className="home-container">
            <h2>The Rebecca Guay MTG Collection</h2>
            <div className="portal-button" onClick={() => navigate('/cards')}>
                {iconRow1.map((icon,idx) => {
                    return <img src={icon} key={idx}/>
                })}
                <h3>View The Card Collection</h3>
                {iconRow2.map((icon,idx) => {
                    return <img src={icon} key={idx}/>
                })}
            </div>
            <div className="card-container">
                <div className="info-card">
                    <div className="piper-card-img">
                <img src="/piper-card.jpg"/>
                    </div>
                    <div className="info-card-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aliquam repellendus reiciendis iusto aut, commodi ipsa esse numquam, quisquam laborum ullam quos, maxime autem doloremque voluptatibus eaque? Veniam, non magnam?</p>
                    </div>
                </div>
                <div className="info-card">
                    <div className="info-card-text">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis nemo molestias dolor voluptatibus aliquam dolorum quaerat impedit officia, fuga a necessitatibus in illum soluta, est debitis sit dolorem, quibusdam rem!</p>
                    </div>
                    <div className="cloak-card-img">
                    <img src="/cloak-card.jpg"/>
                    </div>
                </div>
            </div>


        </div>
    );
}