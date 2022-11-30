import { useState, useEffect } from "react";
import { dbRefMinMax, dbRefHist} from "./firebase";

function Teststate () {
    const[state, setState] = useState ({
        test1:null,
        test2:null
    })

   function handleClick(){
   

            setState({
                test2 : 'Temperature'
            });
      }
    useEffect(()=>{
        dbRefHist.limitToLast(6).on("value", snapshot => {
            var history = snapshot.val();
            var date6=Object.values(history)[5].date
            var date4=Object.values(history)[4].date
    if (state.test2==='press' ||state.test2===null){
            setState({
                test1:date6
            })
   
    }else if (state.test2==='Temperature'){
        setState({
            test1:date4
        })
    }
})
});

return (
    <div>
      <p>{state.test1}</p>
      <button type="button" className="button" onClick={handleClick}>testt</button>
    </div>
  );
}

export {Teststate}