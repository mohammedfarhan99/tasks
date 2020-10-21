import React from 'react';
import axios from 'axios';
import './../Stylesheets/bulma.css' //For styling table

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>User Id</th>
                <th>Username</th>
                <th>Email</th>
                <th>Time of Creation</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    let rows = props.data.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.user_id}</td>
                <td>{row.user_name}</td>
                <td>{row.email}</td>
                <td>{row.created_time}</td>
            </tr>
        )
    })
    return (
        <tbody>
            {rows}
        </tbody>
    )
}

class Table extends React.Component {
    initialState = {
        tableData: []
    }
    state = this.initialState
    componentDidMount() {
        axios.get('http://localhost:3000/?from_date=12-oct-2020&to_date=16-oct-2020', {
            responseType: 'json'
        })
            .then(resp => {
                this.setState({ tableData: resp.data });
            })
            .catch(err => console.log(err));
    }
    render() {
        const { tableData } = this.state;
        return (
            <div className="container is-max-desktop ">
                <div className="table-container">
                    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                        <TableHeader />
                        <TableBody data={tableData} />
                    </table>
                </div>

            </div>

        )

    }
}


export default Table;