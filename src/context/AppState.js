import {createContext} from 'react';

export const initialState = {
    selectedCards: [],
    buttonClass: 'myButton',
    count: 3,
    getReadingButton: 'hidden'
}

export const StateContext = createContext(null);
export const DispatchContext = createContext(null);

function checkCount(state) {
    
}

export const reducer = (state, action) => {
    switch(action.type){
        case'SELECT_CARDS':
            let setSelectedCards = [...state.selectedCards, action.payload]
            return {...state, selectedCards: setSelectedCards}
        case'RESET_BUTTON':
            return state
        case'DECREASE_COUNT':
            return {...state, count: state.count--}
        case 'GET_READING':
            let className = 'Results'
            return {...state, getReadingButton: className}
        default:
            return state;
    }
}


