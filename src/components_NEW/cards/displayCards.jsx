/* eslint-disable */
import React, { useEffect } from "react"
import "./cards.css"
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { connect } from "react-redux";
import { setCards } from "../../actions";

const mapStateToProps = function (state) {
    const displayCards = state.card.displayCards
    return {
        displayCards,
    }
}




const DisplayCards = (props) => {
    const { cards, shuffler } = props

    useEffect(() => {
        if(!props.displayCards.row1){
            shuffler(cards)
        }
    }, [])
    return(
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
        <></>}
                </>
    )
}



export default connect(mapStateToProps, { setCards })(DisplayCards);