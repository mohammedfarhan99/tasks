import Axios from 'axios';
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
const {DateTime} = require('luxon');




class LineGraph extends Component {
  initialstate = {
    labels: [],
    datasets: [
      {
        label: 'Users',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: []
      }
    ]
  }
  state = this.initialstate;
  componentDidMount() {
    if (this.props.graphDataUrl.length>0) {
      Axios.get(this.props.graphDataUrl, {
        responseType: "json"
      })
        .then(resp => {
          console.log("Inside Component Mount", resp.data)
          this.setState({
            labels: resp.data.map(data => { return DateTime.fromISO(data.created_time).toLocaleString(DateTime.DATETIME_FULL) }),
            datasets: [
              {
                label: 'Users',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: resp.data.map(data => { return parseInt(data.userscount) })
              }
            ]
          })
        }).catch(err => console.log(err))
    }


  }



  componentDidUpdate(previousProps) {
    if (this.props.graphDataUrl.length>0) {
      if(previousProps.graphDataUrl !== this.props.graphDataUrl){
        Axios.get(this.props.graphDataUrl, this.state)
        .then(resp => {
          this.setState({
            labels: resp.data.map(data => { return DateTime.fromISO(data.created_time).toLocaleString(DateTime.DATETIME_FULL) }),
            datasets: [
              {
                label: 'Users',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: resp.data.map(data => { return parseInt(data.userscount) })
              }
            ]
          })

        })
      
      }
  

    }


  }
  render() {
    if (this.props.graphDataUrl.length>0 ) {
      // if(this.state.labels.length>0){
        console.log("This is data from state in line graph", this.state.datasets[0].data)
      console.log("Inside Line graph", this.props)
      return (
        <div>
          <Line
            data={this.state}
            options={{
              title: {
                display: true,
                text: 'Number of users',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
          />
        </div>
      )
      }else{
      }

      
    // }
    // else{
    //   return(
    //     <h1>Waiting for input</h1>
    //   )
    // }
   }
}

export default LineGraph;