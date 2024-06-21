import '../App.css';
import singleCard from './singleCard.jpg';
import { useState, useContext } from 'react';
import { StateContext, DispatchContext} from '../context/AppState';

function Cards(){
    const [cardClassName, setCardClassName] = useState('stacked-cards');
    const [buttonClass, setButtonClass] = useState('myButton');
    // const [instructions, setInstructions] = useState('hidden');
    // const [readingButton, setReadingButton] = useState('hidden');
    const [refreshButton, setRefreshButton] = useState('hidden');

    const appState = useContext(StateContext)
    const dispatch = useContext(DispatchContext)

    function cardClicked (e, index) {
        if (appState.selectedCards.includes(index) || appState.selectedCards.length>=3) {
            return
        }
        dispatch({type: 'DECREASE_COUNT'}) 
        dispatch({
        type: 'SELECT_CARDS',
        payload: index
        })
    }

    return(
    
    <div>
        <div className={cardClassName}>
        {[...Array(12)].map((_, index) => (
            <div className='card' key={index}>
                <img src={singleCard} className={appState.selectedCards.includes(index) ? 'selected' : ''} alt='single card'
                    onClick={((e) => {
                        if(!appState.selectedCards.includes(index)) {
                            cardClicked(e, index);
                        } else if (appState.selectedCards.includes(index)) {
                            dispatch({type:'INCREASE_COUNT', payload:index})
                            dispatch({type:'REMOVE_CARDS', payload:index})
                        }
                    })}
                />
            </div>
        ))}

        </div>
        <br></br>
        <br></br>
        <button className={buttonClass} onClick={(()=> {
            setCardClassName('spread-cards')
            setButtonClass('hidden')
        })}>Shuffle Cards</button>
        <button className={appState.selectedCards.length>=3 && appState.getReadingButton!=='Results' ? 'myButton' : 'hidden'} onClick={() => { dispatch({type: 'GET_READING' }); setRefreshButton('myButton'); setCardClassName('hidden')}}>Get your reading</button>
        <p className={appState.selectedCards.length>=3 || cardClassName !== 'spread-cards' ? 'hidden' : ''}>Select {appState.count} cards to have your past, present, and future told</p>
        <button className={refreshButton}  onClick={() => { window.location.reload() }}>Get new reading</button>
    </div>
    )
}

export default Cards