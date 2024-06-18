import {useState, useEffect} from 'react';

function Results(){
    const[readings,setReading] = useState();
    useEffect(() => {
        fetch('https://tarotapi.dev/api/v1/cards/random?n=3')
            .then(response => response.json())
            .then(data => setReading(data))
            .catch(function (error) {
                alert('error', error)
       });
    },[])
 
  return(
    <div>
    {readings && (
        <div>
            <h2>User Information</h2>
            <p>
                Name:
                {readings.cards[0].name}
                Suit:
                {readings.cards[0].suit}

            </p>
            <p>
                Type: {readings.cards[0].type}
            </p>
            {/* Add more user data fields as needed */}
        </div>
    )}
</div>
  )
}

export default Results