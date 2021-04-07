
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './components/About'
import Home from './components/Home'
import Results from './components/Results'
import Input from './components/Input'
import Footer from './components/Footer'
import Err from './components/Err'
import { getResults } from './actions/results'


export class App extends Component {


    componentDidMount() {
      this.props.getResults()
    }
  
  render() {
    if (this.props.loading) {
      return (
        <h3>Loading...</h3>
      )
    }




    
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={ Home} />
          <Route exact path='/about' component={ About } />
          <Route exact path='/results' component={ Results } />
          <Route exact path='/results/new' component={ Input } />
          <Route component={ Err } />
        </Switch>
        <Footer />

      </Router>
     
    )
  
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getResults }) (App)


