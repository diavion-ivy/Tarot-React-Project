import {useState, useEffect} from 'react';
import {imagesArray} from './Images.js';
import CardItems from './CardItems.js';

function Results(){
    const[readings,setReading] = useState();
    useEffect(() => {
        fetch('https://tarotapi.dev/api/v1/cards/random?n=3')
            .then(response => response.json())
            .then((data) => {
                data.cards.map((e) => {
                    console.log(e)
                    for(let image of imagesArray){
                        let link;
                        if(image.name === e.name){
                            link = image.src
                           e['img']= link
                        }
                    }
                }
                )  
                setReading(data)
            
    })
            .catch(function (error) {
                alert('error', error)
       });
    },[])
 
  return(
    <div>
        {readings && readings.cards.map((card) =>
            {
                return(       
                    <CardItems
                        key = {card.value_int}
                        card = {card}
                    />
                    )
            })     
        }
    </div>
  )
 
}

export default Results