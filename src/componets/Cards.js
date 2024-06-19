import '../App.css';
import singleCard from './singleCard.jpg';
import { useState } from 'react';
import Results from './Results.js'
import CardItems from './CardItems.js';
import _ from 'lodash'

function Cards(){
    const [cardClassName, setCardClassName] = useState('stacked-cards')
    const [buttonClass, setButtonClass] = useState('myButton')
    const [instructions, setInstructions] = useState('hidden')
    const [count, setCount]= useState(3)
    const [selectedCards, setSelectedCards] = useState([]);


    return(
    <div>
        <div className={cardClassName}>
        {[...Array(12)].map((_, index) => (
            <div className='card' key={index}>
                <img src={singleCard} className={selectedCards.includes(index) ? 'selected' : ''} alt='single card'
                    onClick={((e) => {
                        if(count > 1 && e.target.className != 'selected'){
                           setCount(count - 1) 
                        //    let countdown = `Select ${count - 1} cards to have your past, present, and future told`
                        //    document.querySelector('.instruction').textContent = countdown
                        //    console.log(countdown)
                           e.target.className ='selected'
                           setSelectedCards([...selectedCards, index])
                        } else if(count === 1 && e.target.className != 'selected'){
                            e.target.className ='selected'
                            setCount(count - 1)
                            // document.querySelector('.instruction').classList.add('hidden')
                            let resultButton = document.createElement('button')
                            resultButton.classList.add('myButton')
                            resultButton.textContent = 'Get your reading'
                            document.querySelector('.deckOfCards').append(resultButton);
                            resultButton.addEventListener('click', () => {
                                //console.log('clickevent')
                            })
                        } 
                    })}
                />
            </div>
        ))}

        </div>
        
        <button className={buttonClass} onClick={(()=> {
            setCardClassName('spread-cards')
            setButtonClass('hidden')
            setInstructions('')
            // let countdown = document.createElement('p')
            // countdown.classList.add('instruction')
            // countdown.textContent = 'Select 3 cards to have your past, present, and future told'
            // document.querySelector('.deckOfCards').append(countdown);
        })}>Shuffle Cards</button>
        <p className={instructions}>Select {3-selectedCards.length} cards to have your past, present, and future told</p>
    </div>
    )
}

export default Cards