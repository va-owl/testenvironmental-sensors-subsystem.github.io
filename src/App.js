import './App.css';
import React, {Component} from "react";
import Kato from "./images/Kato.jpg";
import {Charts} from './components/Charts'
import { RealtimeData } from './components/DataRealtime';

class App extends Component {

render() {
  return (
    <div className="App" style={{backgroundImage: `url(${Kato})`}}>
      <div className="overlay">
      <div className="container">
        <RealtimeData/>
      </div>
        <div className="container">
          <div className="charts">
          <Charts/>
          </div>
        </div>
      </div>
    </div>
    
  )
}
}


export default App;
