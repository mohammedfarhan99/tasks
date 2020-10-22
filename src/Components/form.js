import './../Stylesheets/form.css';
import React from 'react'
import { Component } from 'react';
import axios from 'axios'




class Form extends Component {
    initialState = {
        name: '',
        email: '',
        time: ''
    }
    state = this.initialState;
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit = (event) => {
        console.log("This is what the frontend is sending", this.state);
        axios.post('http://localhost:3000/create_user', this.state)
            .then(data => console.log("This is after submitting", data.data))
            .catch(err => console.log(err))
    }
    render() {
        const { name, email, time } = this.state;
        return (< div className="form-style-5" >
            <form onSubmit={this.onSubmit} >
                < div >
                    <label className="label" htmlFor="name" > Name </label>
                </div>
                < div >
                    <input type="text"
                        name="name"
                        value={name}
                        onChange={this.changeHandler}
                    /> </div> < div >
                    < label className="label"
                        htmlFor="email" > Email </label> </div> <div >
                    <input type="email"
                        name="email"
                        value={email}
                        required
                        onChange={this.changeHandler} /> </div> < div >
                    < label className="label"
                        htmlFor="timeOFCreation" > Time of Creation </label> </div> <div >
                    <input type="date"
                        name="time"
                        value={time}
                        onChange={this.changeHandler} /> </div> <button type="submit" > Submit </button> </form> </div>
        )
    }
}

export default Form;