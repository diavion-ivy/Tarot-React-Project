import Results from './Results.js'

function CardItems({card}){
    return(
        <div>
            <h2>{card.name}</h2>
            <p>Positive Interpretation:{card.meaning_up}</p>
            <p>Negative Interpretation:{card.meaning_rev}</p>
            <p>Description:{card.desc}</p>
            <p>Suit:{card.suit}</p>
            <p>Type:{card.type}</p>
        </div>
    )
}
export default CardItems