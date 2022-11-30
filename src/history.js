import React, { useState, useEffect , Component} from 'react';
import { dbRefMinMax, dbRefHist} from "./firebase";
import { Line } from 'react-chartjs-3';

class History extends Component {
    constructor(props) {
      super(props);  
      this.state = {
          d1: null,
          Max1:null,
          Min1:null,
          pressMax1:null,
          pressMin1:null,
          d2: null,
          Max2:null,
          Min2:null,
          pressMax2:null,
          pressMin2:null,
          d3:null,
          Max3:null,
          Min3:null,
          pressMax3:null,
          pressMin3:null,
          d4: null,
          Max4:null,
          Min4:null,
          pressMax4:null,
          pressMin4:null,
          d5:null,
          Max5:null,
          Min5:null,
          pressMax5:null,
          pressMin5:null,
          d6:null,
          Max6:null,
          Min6:null,
          pressMax6:null,
          pressMin6:null,
          d7:null,
          Max7:null,
          Min7:null,
          pressMax7:null,
          pressMin7:null,
          labelMin:null,
          labelMax:null,
          Click:null
  
        };
        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
    }

    
    handleClick(){
   
        // Changing state
        
        // window.location.reload();
            this.setState({
                Click : 'Temperature'
            });
      }

      handleClick2(){

        //  window.location.reload();
        this.setState({Click : 'Pressure'})
      }
    // const [history, Sethistory] = useState({day1:null, day2:'test'});
  
    // Similar to componentDidMount and componentDidUpdate:
    componentDidMount=() => {



        
      dbRefHist.limitToLast(6).on("value", snapshot => {
        var history = snapshot.val();
        var date6=Object.values(history)[5].date
        //var tesst=Object.seal(history)
        var tempMax6=Object.values(history)[5].tempmax
        var tempMin6=Object.values(history)[5].tempmin
        var pressMax6=Object.values(history)[5].pressuremax
        var pressMin6=Object.values(history)[5].pressuremin
        var [year,month, day,] = date6.split('-');
        var dd = date6.split("-")[2].split(" ")[0];
        var mm = date6.split("-")[1].padStart(2, "0");
        var lastday=dd+'.'+mm
        console.log(tempMax6)
        

        var date5=Object.values(history)[4].date
        var tempMax5=Object.values(history)[4].tempmax
        var tempMin5=Object.values(history)[4].tempmin
        var pressMax5=Object.values(history)[4].pressuremax
        var pressMin5=Object.values(history)[4].pressuremin
        var [year,month, day,] = date5.split('-');
        var dd = date5.split("-")[2].split(" ")[0];
        var mm = date5.split("-")[1].padStart(2, "0");
        var day5=dd+'.'+mm

        var date4=Object.values(history)[3].date
        var tempMax4=Object.values(history)[3].tempmax
        var tempMin4=Object.values(history)[3].tempmin
        var pressMax4=Object.values(history)[3].pressuremax
        var pressMin4=Object.values(history)[3].pressuremin
        var [year,month, day,] = date4.split('-');
        var dd = date4.split("-")[2].split(" ")[0];
        var mm = date4.split("-")[1].padStart(2, "0");
        var date4=dd+'.'+mm
        
        var date3=Object.values(history)[2].date
        var tempMax3=Object.values(history)[2].tempmax
        var tempMin3=Object.values(history)[2].tempmin
        var pressMax3=Object.values(history)[2].pressuremax
        var pressMin3=Object.values(history)[2].pressuremin
        var [year,month, day,] = date3.split('-');
        var dd = date3.split("-")[2].split(" ")[0];
        var mm = date3.split("-")[1].padStart(2, "0");
        var date3=dd+'.'+mm

        var date2=Object.values(history)[1].date
        var tempMax2=Object.values(history)[1].tempmax
        var tempMin2=Object.values(history)[1].tempmin
        var pressMax2=Object.values(history)[1].pressuremax
        var pressMin2=Object.values(history)[1].pressuremin
        var [year,month, day,] = date2.split('-');
        var dd = date2.split("-")[2].split(" ")[0];
        var mm = date2.split("-")[1].padStart(2, "0");
        var date2=dd+'.'+mm

        var date1=Object.values(history)[0].date
        var tempMax1=Object.values(history)[0].tempmax
        var tempMin1=Object.values(history)[0].tempmin
        var pressMax1=Object.values(history)[0].pressuremax
        var pressMin1=Object.values(history)[0].pressuremin
        var [year,month, day,] = date1.split('-');
        var dd = date1.split("-")[2].split(" ")[0];
        var mm = date1.split("-")[1].padStart(2, "0");
        var date1=dd+'.'+mm

        this.setState({
            d6:lastday, 
            d5:day5, 
            d4:date4, 
            d3:date3, 
            d2:date2, 
            d1:date1,

        });

        if(this.state.Click==='Temperature' ){
        this.setState({
            labelMin:"Temperatura minimalna",
            labelMax:"Temperatura maksymalna",
            Min1:tempMin1,
            Min2:tempMin2,
            Min3:tempMin3,
            Min4:tempMin4,
            Min5:tempMin5,
            Min6:tempMin6,
            Max1:tempMax1,
            Max2:tempMax2,
            Max3:tempMax3,
            Max4:tempMax4,
            Max5:tempMax5,
            Max6:tempMax6,
      })
    } else if (this.state.Click==='Pressure' || this.state.Click==null) {
        this.setState({
            labelMin:"Ciśnienie minimalne",
            labelMax:"Ciśnienie maksymalne",
            Min1:pressMin1,
            Min2:pressMin2,
            Min3:pressMin3,
            Min4:pressMin4,
            Min5:pressMin5,
            Min6:pressMin6,
            Max1:pressMax1,
            Max2:pressMax2,
            Max3:pressMax3,
            Max4:pressMax4,
            Max5:pressMax5,
            Max6:pressMax6,
        }) 
    } 

      });

       dbRefMinMax.on("value", snapshot => {
         var minmax = snapshot.val();
         var date7=minmax.date
         var tempMax7=minmax.tempmax
         var tempMin7=minmax.tempmin
         var pressMax7=minmax.pressuremax
         var pressMin7=minmax.pressuremin
         var [year,month, day,] = date7.split('-');
         var dd = date7.split("-")[2].split(" ")[0];
         var mm = date7.split("-")[1].padStart(2, "0");
         var date7=dd+'.'+mm
         this.setState({
            d7:date7
        })

        if(this.state.Click==='Temperature' ){
            this.setState({
                Min7:tempMin7,
                Max7:tempMax7
            }) 
        } else if (this.state.Click==='Pressure' || this.state.Click==null) {
            this.setState({
                Min7:pressMin7,
                Max7:pressMax7
            }) 
            console.log("jest")
        } 
     });

    };




   
    render() {
       
    return (
      <div>
        <Line redraw={true}
          data={{labels: [this.state.d1, this.state.d2, this.state.d3, this.state.d4, this.state.d5, this.state.d6, this.state.d7],
            datasets: [
                {
                label: [this.state.labelMin],
                data: [this.state.Min1, this.state.Min2, this.state.Min3, this.state.Min4, this.state.Min5, this.state.Min6,this.state.Min7],
                fill: false,
                // backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "#129FE5"
                },
                {
                label: [this.state.labelMax],
                data: [this.state.Max1, this.state.Max2, this.state.Max3, this.state.Max4, this.state.Max5, this.state.Max6,this.state.Max7],
                fill: false,
                borderColor: "rgba(227,22,22,1)"
                }
            ]}}
          options={{
            // title:{
            //   display:true,
            //   text:'Average Rainfall per month',
            //   fontSize:20
            // },
            // legend:{
            //   display:true,
            //   position:'bottom'
            // },
            // scales: {
            //     y: {
            //       color: 'green' 
            //     },
            //     x: {
            //       ticks: { color: 'red', beginAtZero: true }
            //     }
            // }
          }}
        />



        {/* <Line data={ {labels: [this.state.d1, this.state.d2, this.state.d3, this.state.d4, this.state.d5, this.state.d6, this.state.d7],
            datasets: [
                {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65,11],
                fill: true,
                // backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
                },
                {
                label: "Second dataset",
                data: [33, 25, 35, 51, 54, 76,110],
                fill: false,
                borderColor: "#742774"
                }
            ]}
        }
        options = {
            scales= {
              x: {
                grid: {
                  color: 'rgba(255,0,0,0.1)',
                  borderColor: 'red'
                }
              },
              y: {
                grid: {
                  color: 'rgba(0,255,0,0.1)',
                  borderColor: 'green'
                }
              }
            }
          } */}
            {/* /> */}

            <div>
        <button type="button" className="button" onClick={this.handleClick}>Temperatura</button>
        <button className="button" type="button" onClick={this.handleClick2}><span className="text">Ciśnienie</span></button>
        
      </div>
      {this.state.Click}
      </div>

    );
  }

}
  export default History


  