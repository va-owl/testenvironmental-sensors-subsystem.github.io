import { TempChart  } from "./Temperature"
import { PressChart } from "./Pressure"
import {useState} from 'react';



function Charts () {

    const [showButton, setShowButton] = useState(false);
    //const tt=document.getElementById('tempButton').classList.add("focus")

    const usePriest = evt => {
        setShowButton(true);
        var tempbutton= document.getElementById('tempButton')
        tempbutton.classList.add('active')
        var pressbutton= document.getElementById('pressButton')
        pressbutton.classList.remove('active')
     
      };

      const usePriest2 = evt => {
        setShowButton(false);
        var tempbutton= document.getElementById('tempButton')
        tempbutton.classList.remove('active')
        var pressbutton= document.getElementById('pressButton')
        pressbutton.classList.add('active')
      };




    // function handleClick(){
    //     setState(s => ({
    //         ...s,
    //         Click : 'Temperature'
    //     }))
    //   }

    // function handleClick2(){
    //     setState(s => ({
    //         ...s,
    //         Click : 'Pressure'
    //     }))
    //   }
// if (state.Click==='Pressure' ||state.Click===null){
//     setState({
//         Max7:pressMax7,
//         Min7:pressMin7,
// })

// }else if (state.Click==='Temperature'){
//     setState({
//         Max7:tempMax7,
//         Min7:tempMin7,
// })
// }




return (
    <div className="item">
      <button className="button" id="tempButton"  onClick={usePriest}><span className="text">Temperatura</span></button>
      <button className="button" id="pressButton" type="button" onClick={usePriest2}><span className="text">Ciśnienie</span></button>
    
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