
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Err from './components/Err'


export class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={ Home} />
          <Route component={ Err } />
        </Switch>
        <Footer />

      </Router>
     
    )
  
  }
}

export default App



