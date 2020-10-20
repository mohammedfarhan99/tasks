import React,{Component} from 'react';
import {Line} from 'react-chartjs-2'




class LineGraph extends Component{
    super(props){
        this.setState = {
            labels: props.graphData.map(data=>{return data.created_time}),
            datasets: [
              {
                label: 'Users',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: props.graphData.map(data=>{return data.userscount})
              }
            ]
          }
    }
   
      
    //  componentDidUpdate(){
    //     this.setState({
    //         labels: this.props.graphData.filter(data=>{return data.created_time}),
    //         data: this.props.graphData.filter(data=>{return data.created_time})
    //     })
    //  } 
    render(){
       
        console.log("Inside Line graph", this.props)
        return(
            <div>
            <Line
              data={this.state}
              options={{
                title:{
                  display:true,
                  text:'Number of users',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
          </div>
        )
    }
}

export default LineGraph;