import React from 'react'
import Card from '../Card/Card'
import './Cards.css'

const Cards = ({cities, onClose}) =>{
    
    return (
        <div className="cards-container">
                {cities.length !== 0 ? 
                    cities.map(city => <Card key={city.id} city={city} onClose={onClose}/>) 
                        : 
                    <div className="message-container">

                        <h2 className="first-title">Buscá el clima actual de cualquier ciudad</h2> 
                    </div>    
                    }
        </div>
           
    )
}

export default Cards;