import React, { Component } from 'react';
import Chart from 'react-apexcharts';
     
type Series={
    name: string
    data: Array<number>
}

type Responsive={
    breakpoint:number
    options:{
        legend:{
            position:string
            offsetX:number
            offsetY:number
        }
    }
}

type PlotOptions={
    bar:{
        horizontal:boolean
        borderRadius:number
    }
}

type Options = {
    chart: {
        type:any
        height:number
        stacked : boolean
        toolbar:{
            show : boolean
        }
        zoom:{
            enabled:boolean
        }
    }
    responsive: Array<Responsive>
    xaxis:{
        categories:Array<number>
    }
    plotOptions:PlotOptions
    legend:{
        position: any
        offsetY: number
      }
    fill:{
        opacity:number
    }
}



type props = {
    options: Options
    series: Array<Series>
}

     
export default class ApexColumn extends Component<{}, {options:Options, series:Array<Series>} >{
    constructor(props:props) {
      super(props);
  
      this.state = {
        options: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
              show: true
            },
            zoom: {
              enabled: true
            }
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996]
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 10
            },
          },
          legend: {
            position: 'right',
            offsetY: 40
          },
          fill: {
            opacity: 1,
          }
        },
        
        series: [{
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43]
          }, {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27]
          }, {
            name: 'PRODUCT C',
            data: [11, 17, 15, 15, 21, 14]
          }, {
            name: 'PRODUCT D',
            data: [21, 7, 25, 13, 22, 8]
          }],
      }
    }
    render() {
      return (
        <div className='chart'>
            <Chart options={this.state.options} series={this.state.series} type="bar" />
        </div>
      )
    }
  }