import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


class Chart extends Component {
  constructor(props) {
  super(props);
  this.state = {
    chartData: {
    labels: [
        'Staff',
        'NeuroViz',
        'BASIIC',
        'Changing Perspectives',
        'PsychVR',
        'Core',
        'Life You Can Lead',
        'Pulse',
        'Seabird Apps',
        'Protein Structure Builder',
        'Clearpay',
        'Grafficity'
      ],
    datasets:[
      {
        label: 'Number of Members per Project',
        data: [
          4,
          6,
          3,
          3,
          2,
          4,
          3,
          2,
          3,
          5,
          2,
          1
        ],
        backgroundColor:[
             'rgba(255, 99, 132, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(255, 206, 86, 0.6)',
             'rgba(75, 192, 192, 0.6)',
             'rgba(153, 102, 255, 0.6)',
             'rgba(255, 159, 64, 0.6)',
             'rgba(255, 99, 132, 0.6)',
             'rgba(118, 170, 140, 0.6)',
             'rgba(245, 228, 163, 0.6)',
             'rgba(191, 103, 186, 0.6)',
             'rgba(229, 236, 255, 0.6)'
          ]
        }
    ]
    // props.chartData
  }
}}

  static defaultProps = {
    displayTitle:true,
    displayLegend: false,
    legendPosition:'right'
  }

  render() {
  return (
    <div className="chart">
    <Bar
	   data={this.state.chartData}
	   options={{
		      // maintainAspectRatio: false
          scales: {
            yAxes: [{
              ticks: {
                min: 0,
              }
            }]
          },

          title:{
            display:this.props.displayTitle,
            text:'Number of Members per Project',
            fontSize:25
          },

          legend: {
            display:this.props.displayLegend,
            position:this.props.legendPosition
          }
	       }}
         />
    </div>
  )
}
}

export default Chart;
