import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCards, setCards } from "../../actions";
import "./cards.css"
import DisplayCards from './displayCards'

const mapStateToProps = state => {
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

function Cards (props) {
    const [library] = useState(props.library)
    const { cards} = props

    useEffect(() => {
        if(!props.cards.length){
          props.getCards()
        }
    }, [])


    function shuffler(arr) {
        console.log('shuffler beginning')
        if (arr.length === 0) {
            console.log('array empty!')
        }
        let temp = [...arr]
        let finalData = []
        let cards = temp.sort(() => Math.random() - Math.random()).slice(0, 5)

        finalData['row1'] = [cards[0], cards[1]]
        finalData['row2'] = [cards[2], cards[3]]
        finalData['stray'] = [cards[4]]
        setTimeout(() => props.setCards(finalData), 5);
    }



    return (
        <>
            {props.cards.length ?
                <DisplayCards shuffler={shuffler} cards={props.cards}/>
                :
                <div className="loading-container">
                    <h1>You have no cards</h1>
                </div>
            }
        </>
    )
}
