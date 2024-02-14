import React, { Component } from 'react'
import Header from './Header'
import Home from './Home'
import Weather from './Weather'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <Router>
        <div className='container-fluid p-0'>
          <Header />
          <Routes>
            <Route path='/weather' element={<Weather />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App

