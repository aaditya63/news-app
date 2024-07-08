// import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Newsbox from './Components/Newsbox';
import { BrowserRouter,Routes,Route } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Newsbox key="normal"/>}/>
            <Route exact path='/general'  element={<Newsbox  key="general" category="general"/>}/>
            <Route exact path='/business'  element={<Newsbox key="business" category="business"/>}/>
            <Route exact path='/entertainment'  element={<Newsbox key="entertainment" category="entertainment"/>}/>
            <Route exact path='/health'  element={<Newsbox key="health" category="health"/>}/>
            <Route exact path='/science' element={<Newsbox  key="science" category="science"/>}/>
            <Route exact path='/sports'  element={<Newsbox key="sports" category="sports"/>}/>
            <Route exact path='/technology'  element={<Newsbox key="technology" category="technology"/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}