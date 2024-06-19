import Results from './Results.js'

function CardItems({card}){



    return(
        <div>
            <h2>{card.name}</h2>
            <img src={card.img} alt="Tarot Card Image"/>
            <p><strong>Description:</strong> {card.desc}</p>
            <p><strong>Positive Interpretation:</strong> {card.meaning_up}</p>
            <p><strong>Negative Interpretation:</strong> {card.meaning_rev}</p>
            <p><strong>Suit:</strong> {card.suit} <strong>Type:</strong> {card.type}</p>
            <p></p>
        </div>
    )
}
export default CardItems