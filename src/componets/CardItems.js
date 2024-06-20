import '../App.css';
import { useContext } from 'react';
import { StateContext} from '../context/AppState';


function CardItems({card, cardTitle,index}){

    console.log("CardItems Ran")

    const appState = useContext(StateContext)

    console.log('app State = ', appState)

    return(
        <div className={appState && appState.getReadingButton} >
                <div className= "ppf">
                    <h1>{cardTitle.name}</h1>
                    <p><i>{cardTitle.explanation}</i></p>
                </div>
                <div className='resultCard'>
                    <div className='cardHeader'>
                        <h2>{card.name}</h2>
                    </div>

                    <div className='cardImg'>
                        <img src={card.img} alt="Tarot Card Image"/>
                    </div>
                    <div className='cardResults'>
                        <p><strong>Description:</strong> {card.desc}</p>
                        <p><strong>Positive Interpretation:</strong> {card.meaning_up}</p>
                        <p><strong>Negative Interpretation:</strong> {card.meaning_rev}</p>
                        <p><strong>Suit:</strong> {card.suit} <strong>Type:</strong> {card.type}</p>
                    </div>
                </div>
        </div>
    )
}
export default CardItems