
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './components/About'
import Home from './components/Home'
import Results from './components/Results'
import Footer from './components/Footer'
import Err from './components/Err'


export class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={ Home} />
          <Route exact path='/about' component={ About } />
          <Route exact path='/results' component={ Results } />
          <Route component={ Err } />
        </Switch>
        <Footer />

      </Router>
     
    )
  
  }
}

export default App



