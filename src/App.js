import './App.css';
import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css'
import { db , dbRef , dbRefHist} from "./firebase";
//mport { dbRef } from "firebase/database";
import React, {Component} from "react";
import { render } from 'react-dom';
import Kato from "./images/Kato.jpg";
 import {FaSun} from 'react-icons/fa';
 import {WiDayCloudy} from 'react-icons/wi';
 import { Pie, Line } from 'react-chartjs-3';
 import History from './history';
import {Teststate5} from './test5'
// import * as Icons from 'react-icons/bs';
import { useState } from "react";
//import { Doughnut } from 'react-chartjs-2';



///BLABLA2
class App extends Component {
  constructor(props) {
    super(props);  
    this.state = {
        hum: null,
        temp: null,
        clouds:null,
        pressure: null,
        icon:null,
        isToggleOn: true
        

      };
  }
   handleClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
   
  }

 handleClick2(){
  this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
  }))
  }

  componentDidMount=()=> {
    
  
    
    dbRef.on("value", snapshot => {
      var weather = snapshot.val(); //wartosci z updated
      var clouds=100-weather.lux;
      var weathericon
      if (weather.temp>25 && clouds >70 ) {
        weathericon=<WiDayCloudy size="6em" color="yellow"/>
      } else if(weather.temp>25 && clouds <70) {
        weathericon=<FaSun size="6em" color="yellow"/>
      }
      this.setState({hum:weather.hum, //wilgotnosc
                    temp: weather.temp, //temperatura
                    pressure: weather.pressure, //cisnienie
                    clouds:clouds, //swiatlo
                    icon:weathericon
      })
     console.log(weather);
   });
///history
dbRefHist.limitToLast(5).on("value", snapshot => {
  var i=0
  var history = snapshot.val();
  //var hiskey=history.firstchild()
  var date7=Object.values(history)[4].date
  var tesst=Object.seal(history)
  var [year,month, day,] = date7.split('-');
  var dd = date7.split("-")[2].split(" ")[0];
  var mm = date7.split("-")[1].padStart(2, "0");
  //console.log(Object.values(tesst)[0].date)
  var lastday=dd+'.'+mm
  //console.log(lastday)
  //lastday_d=lastday.
 // console.log(lastday.getDay())
  //console.log(Object.values(history)[4].date)
  //console.log(history.json[0]);
//console.log(snapshot.val())
  snapshot.forEach(function (childSnapshot) {
    var key = childSnapshot.key;
    var childData = childSnapshot.val();
    var s=Object.values(childData)[0]
  // console.log(Object.values(childSnapshot))
   //console.log(childSnapshot.key, i++, childSnapshot.val())
   // console.log(Object.values(childData).splice(0,1))
   //console.log(s(0))
   
  });
   
 });
  }

  

render() {
  return (
    <div className="App" style={{backgroundImage: `url(${Kato})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section">
            <div className= "section__temperature">
              <div className="temperature">
                <h1>{this.state.temp}°C</h1>
              </div>
              <div className="section__city App-header">
                <h1>Katowice</h1>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="weatherData">
                <p>Zachmurzenia {this.state.clouds}%</p>
                <p>Ciśnienie {this.state.pressure} hPa</p>
                <p>Wilgotność {this.state.hum}%</p>
                
            </div>
            <div className="icon">
                {/* {this.state.temp>30 ? (<FaSun size="6em" color="yellow"/>) :(<WiDayCloudy/>)} */}
              {/* {this.state.temp>30 ? (
                {this.state.clouds>70 ? (<WiDayCloudy/>):(<FaSun size="6em" color="yellow"/>) 
                }}: ()} */}
                
                {/* {this.state.clouds>70 ? (<WiDayCloudy size="6em" color="yellow"/>):(<FaSun size="6em" color="yellow"/>) } */}
                {/* {this.state.icon} */}
              </div>
          </div>
        </div>
        <div className="container">
          {/* <Doughnut/> */}
          <div className="charts">
          {/* <History/> */}
          <Teststate5/>
          {/* <Pie data={{
      labels: ["Red", "Green", "Yellow"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    }} options={{
      legend: {
        display: true,
        position: "bottom"
      }
    }}></Pie> */}
          </div>
          <div>
      <button type="button" className="button" onClick={this.handleClick}>Temperatura</button>
      <button className="button" type="button" onClick={this.handleClick2}><span className="text">Ciśnienie</span></button>
    </div>
        </div>
      </div>
{/* {this.state.isToggleOn} */}
      
      
      
      
      
      
      {/* <h1>Hello</h1>
            <div>
              <p>{this.state.hum}</p>
            </div> */}
    </div>
    
  )
}
}


export default App;
