import React, { Component } from 'react'
import LineGraph from './linegraph'

class GraphForm extends Component {
    initialState = {
        fromDate: '',
        toDate: '',
        graphDataUrl: ''
    }
    state = this.initialState;

    fromDateChange = (event) => {
        console.log(event.target.value)
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
        this.setState({
            graphDataUrl: url
        })
    }
    render() {
        const { fromDate, toDate,graphDataUrl } = this.state;
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
                {/* {lineGraph && lineGraph.length > 0 && <LineGraph graphData={g}/>} */}
                { graphDataUrl && graphDataUrl.length>0 ? <LineGraph graphDataUrl={graphDataUrl}/> :<LineGraph graphDataUrl=""/> }
                
            </div>

        );
    }
}

export default GraphForm;