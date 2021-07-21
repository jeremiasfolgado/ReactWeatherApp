import React, { useState} from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './components/NavBar/NavBar'
import Cards from './components/Cards/Cards'
import CityDetail from './components/CityDetail/CityDetail'
import About from './components/About/About'



import './App.css';

function App() {
  const [cities, setCities] = useState([])
  const APIKEY = process.env.REACT_APP_APIKEY
  
  
  
  const onSearch = async (cityName) => {

     try {
      const call = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric&lang=es`)
      const {data} = call;
      if(data){
        
        const city = {
          name: data.name,
          id:data.id,
          wind: data.wind.speed,
          min: Math.round(data.main.temp_min) ,
          max: Math.round(data.main.temp_max),
          feelsLike: data.main.feels_like,
          temp: Math.round(data.main.temp),
          humidity: data.main.humidity,
          description: data.weather[0].description,
          icon: data.weather[0].icon,



        }
        if(!!cities.find(c => c.id === city.id)){
          return 
        }
        setCities(oldCities => [...oldCities, city])
        
      }
       
     } catch (error) {
       console.log(error)
     }
  }
  const onClose = (id) => {
    setCities(oldCities => oldCities.filter(c => c.id !== id))
  }
  
  const onDetail = (id) =>{
    return cities.find(c => c.id === parseInt(id))
  }
      





  return (
    <div className="App">
      <Route path='/' render={()=> <NavBar onSearch={onSearch}/>} />
      <Route exact path="/" render={()=> <Cards cities={cities} onClose={onClose}/>} />
      <Route exact path="/city/:id" render={({match})=> <CityDetail city={onDetail(match.params.id)}/>} />
      <Route exact path="/about" component={About} />
     

    </div>
  );
}

export default App;
