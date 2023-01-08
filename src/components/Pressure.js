import { useState, useEffect } from "react";
import { dbRefMinMax, dbRefHist} from "../firebase";
import { Line } from 'react-chartjs-3';

function PressChart () {
    const[state, setState] = useState ({
      

    })
    useEffect(()=>{
        dbRefHist.limitToLast(6).on("value", snapshot => {
            var history = snapshot.val();
            var date6=Object.values(history)[5].date
            var pressMax6=Object.values(history)[5].pressuremax
            var pressMin6=Object.values(history)[5].pressuremin
            var dd = date6.split("-")[2].split(" ")[0];
            var mm = date6.split("-")[1].padStart(2, "0");
            var day6=dd+'.'+mm
            setState(s => ({
                ...s,
                d6:day6,
                Min6:pressMin6,
                Max6:pressMax6,
                labelMin:"Ciśnienie minimalne [hPa]",
                labelMax:"Ciśnienie maksymalne [hPa]"

            })) 
            var date5=Object.values(history)[4].date
            var pressMax5=Object.values(history)[4].pressuremax
            var pressMin5=Object.values(history)[4].pressuremin
            //var [year,month, day,] = date5.split('-');
            var dd = date5.split("-")[2].split(" ")[0];
            var mm = date5.split("-")[1].padStart(2, "0");
            var day5=dd+'.'+mm
            setState(s => ({
                ...s,
                d5:day5,
                Min5:pressMin5,
                Max5:pressMax5
            }))

            var date4=Object.values(history)[3].date
            var pressMax4=Object.values(history)[3].pressuremax
            var pressMin4=Object.values(history)[3].pressuremin
           // var [year,month, day,] = date4.split('-');
            var dd = date4.split("-")[2].split(" ")[0];
            var mm = date4.split("-")[1].padStart(2, "0");
            var day4=dd+'.'+mm
            setState(s => ({
                ...s,
                d4:day4,
                Min4:pressMin4,
                Max4:pressMax4
            }))
            
            var date3=Object.values(history)[2].date
            var pressMax3=Object.values(history)[2].pressuremax
            var pressMin3=Object.values(history)[2].pressuremin
            //var [year,month, day,] = date3.split('-');
            var dd = date3.split("-")[2].split(" ")[0];
            var mm = date3.split("-")[1].padStart(2, "0");
            var day3=dd+'.'+mm
            setState(s => ({
                ...s,
                d3:day3,
                Min3:pressMin3,
                Max3:pressMax3
            }))
            var date2=Object.values(history)[1].date
            var pressMax2=Object.values(history)[1].pressuremax
            var pressMin2=Object.values(history)[1].pressuremin
            //var [year,month, day,] = date2.split('-');
            var dd = date2.split("-")[2].split(" ")[0];
            var mm = date2.split("-")[1].padStart(2, "0");
            var day2=dd+'.'+mm
            setState(s => ({
                ...s,
                d2:day2,
                Min2:pressMin2,
                Max2:pressMax2
            }))
            var date1=Object.values(history)[0].date
            var pressMax1=Object.values(history)[0].pressuremax
            var pressMin1=Object.values(history)[0].pressuremin
            //var [year,month, day,] = date1.split('-');
            var dd = date1.split("-")[2].split(" ")[0];
            var mm = date1.split("-")[1].padStart(2, "0");
            var day1=dd+'.'+mm
            setState(s => ({
                ...s,
                d1:day1,
                Min1:pressMin1,
                Max1:pressMax1
            }))
        })

            dbRefMinMax.on("value", snapshot => {
                var minmax = snapshot.val();
                var date7=minmax.date
                var pressMax7=minmax.pressuremax
                var pressMin7=minmax.pressuremin
                // var [year,month, day,] = date7.split('-');
                var dd = date7.split("-")[2].split(" ")[0];
                var mm = date7.split("-")[1].padStart(2, "0");
                date7=dd+'.'+mm
                setState(s => ({
                    ...s,
                   d7:date7,
                   Min7:pressMin7,
                   Max7:pressMax7
               }))
        })
        
},[]);

return (
      <div>
        <Line redraw={true}
          data={{labels: [state.d1, state.d2, state.d3, state.d4, state.d5, state.d6, state.d7],
            datasets: [
                {
                label: [state.labelMax],
                data: [state.Max1, state.Max2, state.Max3,state.Max4, state.Max5, state.Max6,state.Max7],
                fill: false,
                borderColor: "rgba(227,22,22,1)"
                },
                {
                label: state.labelMax,
                data: [state.Min1, state.Min2, state.Min3, state.Min4, state.Min5, state.Min6, state.Min7],
                fill: false,
                borderColor: "#129FE5"
                }
            ]}}
            legend = {{
                display: true,
                position: "bottom",
                labels: {
                  fontColor: "#fffbeb5e",
                  fontSize: 9,
                  fontFamily:"monospace"
                }
              }}
              options = {{
                // title: {
                //   display: true,
                //   text: "Chart Title"
                // },
                scales: {
                  yAxes: [
                    { gridLines: {
                        color: "#fffbeb5e",
                    },
                        ticks: {
                          fontColor: "#fffbeb5e", 
                        },
                    }
                  ],
                  xAxes: [{ 
                    gridLines: {
                        color: "#fffbeb5e",
                    },
                    ticks: {
                      fontColor: "#fffbeb5e", 
                    },
                }],
                }
              }}
        />
      </div>

    );
  }



export {PressChart}