import { TempChart  } from "./Temperature"
import { PressChart } from "./Pressure"
import {useState} from 'react';

function Charts () {

    const [showButton, setShowButton] = useState(false);

    const ShowTempChart = evt => {
        setShowButton(true);
        var tempbutton= document.getElementById('tempButton')
        tempbutton.classList.add('active')
        var pressbutton= document.getElementById('pressButton')
        pressbutton.classList.remove('active')
     
      };

      const ShowPressChart = evt => {
        setShowButton(false);
        var tempbutton= document.getElementById('tempButton')
        tempbutton.classList.remove('active')
        var pressbutton= document.getElementById('pressButton')
        pressbutton.classList.add('active')
      };

return (
    <div className="item">
      <button className="button" id="tempButton"  onClick={ShowTempChart}><span className="text">Temperatura</span></button>
      <button className="button" id="pressButton" type="button" onClick={ShowPressChart}><span className="text">Ciśnienie</span></button>
    
    {showButton && (
        <div>
          <TempChart/>
        </div>
    )}
    {showButton===false && (
        <div>
          <PressChart/>
        </div>
    )}
    </div>
  );
        }
        export {Charts}