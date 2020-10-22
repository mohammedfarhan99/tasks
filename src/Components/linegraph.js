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

  settingGraphData = ()=>{
    Axios.get(this.props.graphDataUrl, {
      responseType: "json"
    })
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
      }).catch(err => console.log(err))
  }
  componentDidMount() {
    if (this.props.graphDataUrl.length>0) {
      this.settingGraphData();
    }


  }



  componentDidUpdate(previousProps) {
    if (this.props.graphDataUrl.length>0) {
      if(previousProps.graphDataUrl !== this.props.graphDataUrl){


        this.settingGraphData();
      
      }
  

    }


  }
  render() {
    if (this.props.graphDataUrl.length>0 ) {
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
        return null;
      }

      
    
   }
}

export default LineGraph;