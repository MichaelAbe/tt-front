import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestResult from './TestResult'

class Results extends Component {


    render() {
        console.log(this.props.results)
        const results = this.props.results.map( (test, i) => <TestResult key={i} username={test.username} wpm={test.wpm} />)
        
        
        return (
            <div>
            
                { results }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}


export default connect(mapStateToProps)(Results)
