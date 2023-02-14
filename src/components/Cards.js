/* eslint-disable react/prop-types */
import React from "react";
import Footer from "./FooterBS";
import { connect } from "react-redux";
import { getCards } from "../actions";

const Cards = (props) => {
    const {cards} = props
    return (
        <>
            <h1>Work in progress</h1>
            <button onClick={() => console.log(cards)}>Test</button>
            <button onClick={() => props.getCards()}>Test</button>
            <Footer />
        </>
    )
}

const mapStateToProps = function (state) {
    const displayCards = state.card.displayCards
    const cards = state.card.cards
    return {
        displayCards,
        cards
    }
}


export default connect(mapStateToProps, {getCards})(Cards);