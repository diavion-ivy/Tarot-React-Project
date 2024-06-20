import {useState, useEffect} from 'react';
import {imagesArray} from './Images.js';
import CardItems from './CardItems.js';

function Results(){
    const[readings,setReading] = useState();
    let ppf = {}
    useEffect(() => {
        fetch('https://tarotapi.dev/api/v1/cards/random?n=3')
            .then(response => response.json())
            .then((data) => {
                data.cards.map((e) => {
                    console.log(e)
                    if(e.suit === undefined){
                        e['suit']='None'
                    }
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
        {readings && readings.cards.map((card, index) =>
            {
                if (index===0) {
                    console.log('1')
                    ppf = { name:'Past',
                             explanation:'"Provides insight into past events that still affect you"' }
                } else if (index===1) {
                    console.log('2')
                    ppf = { name:'Present',
                             explanation:'"Provides insight into your present challenges"' }
                } else if (index===2) {
                    console.log('3')
                    ppf = { name:'Future',
                             explanation:'"Provides insight into the direction things are moving in"' }
                }
                return(
                            <CardItems
                                key = {card.value_int}
                                card = {card}
                                cardTitle = {ppf}
                                index = {index}
                            />

                    )
            })     
        }
    </div>
  )
 
}

export default Results