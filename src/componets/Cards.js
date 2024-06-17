import '../App.css';
import singleCard from './singleCard.jpg';
function Cards(){

    return(

        <div className="spread-cards">
        {[...Array(12)].map((_, index) => (
            <div className="card" key={index}>
                <img src={singleCard} alt='single card'/>
            </div>
        ))}
    </div>
    )
}

export default Cards