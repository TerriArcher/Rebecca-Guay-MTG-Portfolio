import {
    GET_CARDS_START,
    GET_CARDS_SUCCESS,
    GET_CARDS_FAILURE,
    SET_CARDS,
    TESTING
} from '../actions'

export const initialState = {
    cards: [],
    displayCards: [],
    currentCard: {},
    isFetching: false,
    error: '',
    libraryLoaded: false
}

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDS_START:
            return{
                ...state,
                isFetching: true,
                error: ''
            }
        case GET_CARDS_SUCCESS: 
            return{
                ...state,
                isFetching: false,
                libraryLoaded: true,
                cards: action.payload,
            }
        case GET_CARDS_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        case SET_CARDS:
            return{
                ...state,
                displayCards: action.payload
            }
        case TESTING:
            return{
                ...state
            }
        default:
            return state
    }
}

export default cardReducer;