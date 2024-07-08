// import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Newsbox from './Components/Newsbox';
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Newsbox category="science"/>
      </div>
    )
  }
}