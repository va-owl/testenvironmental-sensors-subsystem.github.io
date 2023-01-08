import { useState, useEffect } from "react";
import { dbRef} from "../firebase";
import ClearDay from "./icons/clear_day";
import CoudyDay from './icons/CoudyDay';


function RealtimeData () {
    const[state, setState] = useState ({
      
    })

    useEffect(()=>{

        dbRef.on("value", snapshot => {
            var weather = snapshot.val(); //wartosci z updated
            var clouds=100-weather.lux;
            var weathericon
            if (weather.temp>25 && clouds >70 ) {
              weathericon=<CoudyDay/>
            } else if(weather.temp>25 && clouds <70) {
              weathericon=<ClearDay/>
            }
            setState(s => ({
                ...s,
                hum:weather.hum, //wilgotnosc
                temp: weather.temp, //temperatura
                pressure: weather.pressure, //cisnienie
                clouds:clouds, //swiatlo
                icon:weathericon,
                tempRound:Math.round(weather.temp),
                today:new Date().toLocaleDateString()
            }))
          // console.log(new Date().toLocaleDateString());
         });
        
},[]);

return (
    <div className="container">
    {/* <div className='section_date'>
      {this.state.today}
     </div> */}
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
              <p>Zachmurzenia {state.clouds}%</p>
              <p>Ciśnienie {state.pressure} hPa</p>
              <p>Wilgotność {state.hum}%</p>
              <p>Temperatura {state.temp}°C</p>
              
          </div>
          <div className="icon">
            {/* <ClearDay/> */}
              {/* {this.state.temp>30 ? (<FaSun size="6em" color="yellow"/>) :(<WiDayCloudy/>)} */}
            {/* {this.state.temp>30 ? (
              {this.state.clouds>70 ? (<WiDayCloudy/>):(<FaSun size="6em" color="yellow"/>) 
              }}: ()} */}
              
              {/* {this.state.clouds>70 ? (<WiDayCloudy size="6em" color="yellow"/>):(<FaSun size="6em" color="yellow"/>) } */}
              {state.icon}
          </div>
          
        </div>
      </div>
    </div>
  </div>

    );
  }



export {RealtimeData}