import React, { Component } from 'react'

class Input extends Component {

    state = {
        username: "",
        wpm: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h4>Add your name to the scoreboard</h4>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input type="text" id='username' name='username' value={ this.state.username } onChange={ this.handleChange }/>
                    </div>
                    <div>
                        <label htmlFor='wpm'>Words Per Minute</label>
                        <input type="text" id='content' name='wpm' value={ this.state.wpm } onChange={ this.handleChange }/>
                    </div>
                    <input type="submit" value="Add your score!" />
                </form>
            </div>
        )
    }
}

export default Input
