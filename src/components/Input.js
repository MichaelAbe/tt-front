import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addResults } from '../actions/results'

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
        this.props.addResults(this.state, this.props.history)
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

export default connect(null, { addResults })(Input)
