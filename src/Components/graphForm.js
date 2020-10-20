import Axios from 'axios';
import React, { Component } from 'react'
import LineGraph from './linegraph'

class GraphForm extends Component {
    initialState = {
        fromDate: '',
        toDate: '',
        lineGraph: [[
            {
                userscount: 2,
                created_time: "2020-10-12T18:30:00.000Z"
            },
            {
                userscount: 6,
                created_time: "2020-10-13T18:30:00.000Z"
            }
        ]]
    }
    state = this.initialState;

    fromDateChange = (event) => {
        this.setState({
            fromDate: event.target.value
        });
    }
    toDateChange = (event) => {
        this.setState({
            toDate: event.target.value
        })
    }
    // changeHandler = (event)=>{
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }
    onSubmit = (event) => {
        event.preventDefault();
        console.log("These are from and to dates", this.state)
        let from_date = "from_date=" + this.state.fromDate;
        let to_date = "to_date=" + this.state.toDate;
        let url = `http://localhost:3000/counts/?` + from_date + "&" + to_date;
        Axios.get(url, {
            responseType: 'json'
        })
            .then(resp => {
                this.setState({
                    lineGraph: resp.data
                });
            })
    }
    render() {
        const { fromDate, toDate,lineGraph } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="fromDate">From Date:</label>
                        <input type="date"
                            name="fromDate"
                            value={fromDate}
                            onChange={this.fromDateChange} />
                    </div>
                    <div>
                        <label htmlFor="toDate">To Date:</label>
                        <input type="date"
                            name="toDate"
                            value={toDate}
                            onChange={this.toDateChange} />
                    </div>
                    <button type="submit" > Submit </button>
                </form>
                <LineGraph graphData={lineGraph}/>
            </div>

        );
    }
}

export default GraphForm;