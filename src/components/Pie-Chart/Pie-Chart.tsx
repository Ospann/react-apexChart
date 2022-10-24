import React, { Component } from 'react';
import Chart from 'react-apexcharts';
     
type Series= Array<number>

type Responsive={
    breakpoint:number
    options:{
        // chart: {
        //     width: number
        //   },
          legend: {
            position: string
          }
    }
}


type Options = {
    chart: {
        // width: number,
        type: any,
    }
    labels:string[]
    responsive: Array<Responsive>
}



type props = {
    options: Options
    series: Series
}

     
export default class ApexPie extends Component<{}, {options:Options, series:Series} >{
    constructor(props:props) {
      super(props);
  
      this.state = {
          
        series: [44, 55, 13, 43, 22],
        options: {
          chart: {
            // width: 380,
            type: 'pie',
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [{
            breakpoint: 480,
            options: {
            //   chart: {
                // width: 200
            //   },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      };
    }
    render() {
      return (
        <div className='chart'>
            <Chart options={this.state.options} series={this.state.series} type="pie" width={850} height={500}/>
        </div>
      )
    }
  }