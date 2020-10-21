import React, { Component } from 'react';
import LineGraph from './linegraph';
import './../Stylesheets/form.css'; //Importing form styles
import './../Stylesheets/app.css';


class GraphForm extends Component {
    initialState = {
        fromDate: '2020-10-12',      /** Default dates to show in  input form*/
        toDate: '2020-10-16',
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

    onSubmit = (event) => {
        event.preventDefault();//To prevent reloading of page as state and props reset after reloading the page
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
                <form onSubmit={this.onSubmit} className="form-style-5">
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
                {/* Inputs default url of dates  12-10-2020 - 16-10-2020 until user gives a different input */}
                { graphDataUrl && graphDataUrl.length>0 ? <LineGraph graphDataUrl={graphDataUrl}/> :<LineGraph graphDataUrl="http://localhost:3000/counts/?from_date=2020-10-12&to_date=2020-10-16
"/> }
                
            </div>

        );
    }
}

export default GraphForm;