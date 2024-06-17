import '../App.css';
import singleCard from './singleCard.jpg';
function Cards(){

    return(
        <div className="cards">
            <img src={singleCard} alt='single card'/>
        </div>
    )
}

export default Cards