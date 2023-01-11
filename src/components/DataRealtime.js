import { useState, useEffect } from "react";
import { dbRef} from "../firebase";
import ClearDay from "./icons/ClearDay";
import CoudyDay from './icons/CoudyDay';
import Sunrise from "./icons/Sunrise";
import Sunset from "./icons/Sunset";
import Twilight from "./icons/Twilight";
import Cloudy from "./icons/Cloudy";
import CloudyNight from "./icons/CloudyNight";
import ClearNight from "./icons/ClearNight";

function RealtimeData () {
    const[state, setState] = useState ({    
    })
    useEffect(()=>{
        var date = new Date();
        var current_hour = date.getHours();
        dbRef.on("value", snapshot => {
            var weather = snapshot.val(); //wartosci z updated
            var lux=weather.lux;
            var weathericon
            var weatherstate
            if (lux<0.6){
              weatherstate="Zachmurzone niebo nocą"
              weathericon=<CloudyNight/>
            }else if (lux<=1.8 && lux>=0.6){
              weatherstate="Czyste niebo nocą"
              weathericon=<ClearNight/>
            } else if (lux<=10.8 && lux>1.8){
              weatherstate="Zmierzch"
              weathericon=<Twilight/>
            } else if (lux<=107 && lux>10.8) {
              weatherstate="Ciemny pochmurny dzień"
              weathericon=<Cloudy/>
            } else if (lux<=405 && lux>=325 && current_hour<'0' && current_hour>'7') {
              weatherstate="Wschód słońca"
              weathericon=<Sunrise/>
            } else if (lux<=405 && lux>=325 && current_hour<'16' && current_hour>'23') {
              weatherstate="Zachód słońca"
              weathericon=<Sunset/>
            } else if (lux<=1000 && lux>405) {
              weatherstate="Jasny pochmurny dzień"
              weathericon=<CoudyDay/>
            } else if (lux<=25000  && lux>10000) {
              weatherstate="Słoneczny dzień"
              weathericon=<ClearDay/>
            }
            setState(s => ({
                ...s,
                hum:weather.hum, //wilgotnosc
                temp: weather.temp, //temperatura
                pressure: weather.pressure, //cisnienie
                weatherstate:weatherstate, 
                icon:weathericon,
                tempRound:Math.round(weather.temp),
                today:new Date().toLocaleDateString()
            }))
         });  
         return () => {
          setState(s => ({
            ...s,
           
       }))
        }     
},[]);

return (
    <div className='weather'>
      <div className="section">
        <div className= "section__temperature">
          <div className="temperature">
            <h1>{state.tempRound}°C</h1>
          </div>
          <div className="section__city App-header">
            <h1>Katowice</h1>
          </div>
        </div>
      </div>
      <div className="section">
        <div className='section_data'>
        <div className="weatherData">  
          <ul>
              <li>Ciśnienie {state.pressure} hPa</li>
              <li>Wilgotność {state.hum}%</li>
              <li>Temperatura {state.temp}°C</li>
              <li>{state.weatherstate}</li>
            </ul>
          </div>
          <div className="icon">
              {state.icon}
          </div>  
        </div>
      </div>
    </div>

    );
  }



export {RealtimeData}