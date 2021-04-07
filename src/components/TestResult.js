import React, { Component } from 'react'

class TestResult extends Component {


    render() {
        // console.log(this)
        const {username, wpm}=this.props

        return (
            <div>
                <h3>{ username } typed { wpm } words per minute!</h3>
            </div>
        )
    }
}

export default TestResult
