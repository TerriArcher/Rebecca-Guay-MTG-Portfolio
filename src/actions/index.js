import axios from 'axios'

export const GET_CARDS_START = 'GET_CARDS_START'
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS'
export const GET_CARDS_FAILURE = 'GET_CARDS_FAILURE'
export const SET_CARDS = "SET_CARDS"
export const TESTING = "TESTING"

export const getCards = () => dispatch => {
    dispatch({ type: GET_CARDS_START })
    axios.get('https://api.scryfall.com/cards/search?q=a%3A"rebecca+guay"')
        .then(({ data }) => {
            dispatch({ type: GET_CARDS_SUCCESS, payload: data.data })
        })
        .catch(err => {
            console.error(err)
            dispatch({ type: GET_CARDS_FAILURE, payload: "404 Error, unable to fetch cards" })
        })
}

export const setCards = (cards) => {
    return({ type: SET_CARDS, payload: cards })
}
