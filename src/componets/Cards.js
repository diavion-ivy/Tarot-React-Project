import '../App.css';
import singleCard from './singleCard.jpg';
import { useState, useContext } from 'react';
import { StateContext, DispatchContext} from '../context/AppState';

function Cards(){
    const [cardClassName, setCardClassName] = useState('stacked-cards')
    const [buttonClass, setButtonClass] = useState('myButton')
    const [instructions, setInstructions] = useState('hidden')
    const [readingButton, setReadingButton] = useState('hidden')

    const appState = useContext(StateContext)
    const dispatch = useContext(DispatchContext)

    function cardClicked (e, index) {
        if(appState.count > 1 && e.target.className !== 'selected'){
            dispatch({type: 'DECREASE_COUNT'}) 
           e.target.className ='selected'
           dispatch({
            type: 'SELECT_CARDS',
            payload: index
           })
        } else if(appState.count === 1 && e.target.className !== 'selected'){
            e.target.className ='selected'
            dispatch({type: 'DECREASE_COUNT'})
            setReadingButton('myButton')
            setInstructions('hidden')
        } 
    }

    return(
    
    <div>
        <div className={cardClassName}>
        {[...Array(12)].map((_, index) => (
            <div className='card' key={index}>
                <img src={singleCard} className={appState.selectedCards.includes(index) ? 'selected' : ''} alt='single card'
                    onClick={((e) => {
                        cardClicked(e, index);
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
            setInstructions('')
        })}>Shuffle Cards</button>
        <button className={readingButton} onClick={() => dispatch({type: 'GET_READING'})}>Get your reading</button>
        <p className={instructions}>Select {appState.count} cards to have your past, present, and future told</p>
    </div>
    )
}

export default Cards