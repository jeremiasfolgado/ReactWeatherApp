import React from 'react'
import { useHistory } from 'react-router-dom'
import './CityDetail.css'

const CityDetail = ({city}) =>{
    const history = useHistory()
    if(!city) {
        history.push('/')
        return (
            <div>
                <h2>se perdio la conexión</h2>
            </div>
        )
    }
    return (
        <div className="main-container">
            <div className="detail-container">
                <div className="icon-title">
                    <h4>{city.name}</h4>
                    <img src={`https://openweathermap.org/img/wn/${city.icon}@4x.png`} alt="weather icon"></img>
                    <span>{city.description}</span>
                </div>
                <div className="aditional-info">
                    <div className="more-info">
                        <span>Sensación térmica</span>
                        <span>{city.feelsLike} °</span>
                        
                    </div>
                    <div className="more-info">
                        <span>Humedad </span>
                        <span>{city.humidity}  / 100</span>
                    </div>
                        
                    
                    <div className="more-info">
                        <span>Viento</span>
                        
                        <span>{city.wind} km/h</span>
                        
                        
                    </div>
                    
            </div>


        </div>

        </div>
        
    )
}

export default CityDetail;
