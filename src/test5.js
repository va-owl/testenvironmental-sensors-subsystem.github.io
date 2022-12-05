import { Teststate4  } from "./test4"
import { Teststate3 } from "./test3"
import {useState} from 'react';



function Teststate5 () {

    const [showButton, setShowButton] = useState(false);


    const usePriest = evt => {
        setShowButton(true);
      };

      const usePriest2 = evt => {
        setShowButton(false);
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
    <div>
      <button type="button" className="button" onClick={usePriest}>Temperatura</button>
      <button className="button" type="button" onClick={usePriest2}><span className="text">Ciśnienie</span></button>
    
    {showButton && (
        <div>
          <Teststate4/>
        </div>
    )}
    {showButton===false && (
        <div>
          <Teststate3/>
        </div>
    )}
    </div>
 

  );
        }
        export {Teststate5}