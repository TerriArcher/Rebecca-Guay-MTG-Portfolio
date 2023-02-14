/* eslint-disable */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCards, setCards } from "../../actions";
import "./cards.css"
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Cards = (props) => {

    console.log(props.library)

    if (!props.cards.length) {
        useEffect(() => {
            props.getCards()
        }, [])
    }

    function shuffler(arr) {
        if (arr.length === 0) {
            console.log('array empty!')
            return
        }
        let temp = [...arr]
        let finalData = []
        let cards = temp.sort(() => Math.random() - Math.random()).slice(0, 5)

        finalData['row1'] = [cards[0], cards[1]]
        finalData['row2'] = [cards[2], cards[3]]
        finalData['stray'] = [cards[4]]
        setTimeout(props.setCards(finalData),5);
    }

    useEffect(() => {
        shuffler(props.cards)
    }, [props.library])



    return (
        <>
            {props.displayCards.row1 ?
                <Container className="display-container">
                    <Row className="top-row">
                        {props.displayCards.row1.map((card, idx) => {
                            return (
                                <Col
                                    xs="auto"
                                    key={idx}
                                    className={`card-${idx}`}
                                >
                                    <img src={card.image_uris.small}
                                        alt={card.name}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                    <Row className="bottom-row">
                        {props.displayCards.row2.map((card, idx) => {
                            return (
                                <Col
                                    xs="auto"
                                    key={idx}
                                    className={`card-${idx}`}
                                >
                                    <img src={card.image_uris.small}
                                        alt={card.name}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                    <Row className="stray">
                        {props.displayCards.stray.map((card, idx) => {
                            return (
                                <Col
                                    xs="auto"
                                    key={idx}
                                    className={`stray`}
                                >
                                    <img src={card.image_uris.small}
                                        alt={card.name}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
                :
                <div className="loading-container">
                    <h1>You have no cards</h1>
                </div>
            }
        </>
    )
}

const mapStateToProps = function (state) {
    const displayCards = state.card.displayCards
    const cards = state.card.cards
    const library = state.card.libraryLoaded
    return {
        displayCards,
        cards,
        library
    }
}


export default connect(mapStateToProps, { getCards, setCards })(Cards);