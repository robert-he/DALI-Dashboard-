import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    //AJAX Call
    this.setState({
      chartData:{
        labels: ['Boston424', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    })
  }

  componentDidMount() {
    // fetch('http://mappy.dali.dartmouth.edu/members.json')
    //   .then(function(res){
    //     console.log(res.json());
    //   })
      fetch('http://mappy.dali.dartmouth.edu/members.json')
        .then((res) => res.json())
        .then((data) => console.log(data))
      }

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      //   <Chart/>
      // </div>
      <div>
      <Chart chartData={this.state.chartData} legendPosition='bottom'/>
      <Chart chartData={this.state.chartData} legendPosition='top'/>
      </div>
    );
  }
}

export default App;
