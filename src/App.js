import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Chart from './components/Chart';
import Table from './Table.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoaded: false,
      // chartData:{},
      //
      data:[]
      // names:[],
      // iconUrls:[],
      // Urls:[].
      // messages:[],
      // projects:[],
      // terms:[]
    }
  }

  // componentWillMount(){
  //   this.getChartData();
  // }
  //
  // getChartData(){
  //   //AJAX Call
  //   this.setState({
  //     chartData:{
  //       labels: ['Boston424', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
  //       datasets: [
  //         {
  //           label:'Population',
  //           data:[
  //             617594,
  //             181045,
  //             153060,
  //             106519,
  //             105162,
  //             95072
  //           ],
  //           backgroundColor:[
  //             'rgba(255, 99, 132, 0.6)',
  //             'rgba(54, 162, 235, 0.6)',
  //             'rgba(255, 206, 86, 0.6)',
  //             'rgba(75, 192, 192, 0.6)',
  //             'rgba(153, 102, 255, 0.6)',
  //             'rgba(255, 159, 64, 0.6)',
  //             'rgba(255, 99, 132, 0.6)'
  //           ]
  //         }
  //       ]
  //     }
  //   })
  // }

  componentDidMount() {
    // fetch('http://mappy.dali.dartmouth.edu/members.json')
    //   .then(function(res){
    //     console.log(res.json());
    //   })
      fetch('http://mappy.dali.dartmouth.edu/members.json')
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            isLoaded: true,
            data: json,
          })}
        )
      }

  render() {

    var { isLoaded, data } = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>;
    }
    else {

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
      <div className="App">

      <AppBar position="static">
         <Toolbar>
           <IconButton color="inherit" aria-label="Menu">
             <MenuIcon />
           </IconButton>
           <Typography variant="h6" color="inherit">
             News
           </Typography>
           <Button color="inherit">Login</Button>
         </Toolbar>
       </AppBar>

          {data.map(info => (
            <div>
            Name: {info.name} | URL: {info.url} | Image: {info.iconUrl} |
            Message: {info.message} | Terms On: {info.terms_on} | Projects: {info.project}
            </div>
          ))}

          <Table allData={this.state.data}/>
      </div>


      // <Chart chartData={this.state.chartData} legendPosition='bottom'/>
      // <Chart chartData={this.state.chartData} legendPosition='top'/>
    )
  }}
}

export default App;
