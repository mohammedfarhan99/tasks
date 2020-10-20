import React from 'react';
import Form from './Components/form'
import Table from './Components/table'
import GraphForm from './Components/graphForm'
import './Stylesheets/app.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="task-1">
          <Form />
          <Table />
        </div>
        <hr></hr>
        <div className="task-2">
          <GraphForm />
        </div>
      </div>

    )
  }
}



export default App;
