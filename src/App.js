import React, {useEffect, useState} from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './components/NavBar/NavBar'
import Cards from './components/Cards/Cards'
import CityDetail from './components/CityDetail/CityDetail'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

import logo from './logo.svg';
import './App.css';

function App() {
  const [cities, setCities] = useState([])
  // useEffect(()=>{
  //   async function axiosData(){
  //     const call = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=london&appid=1bcbfca8f0a7bb9d2f22e0df86b6dcd4&units=metric&lang=es`);
  //     const {data} = call
  //     console.log("en el use", data)
  //   }
  //   axiosData()


  // })
  console.log(cities)
  
  const onSearch = async (cityName) => {
     try {
      const call = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1bcbfca8f0a7bb9d2f22e0df86b6dcd4&units=metric&lang=es`)
      const {data} = call;
      if(data){
        const city = {
          name: data.name,
          id:data.id
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
      <Route path="/" component={Footer} /> 

    </div>
  );
}

export default App;
