// import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Newsbox from './Components/Newsbox';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY;
  state = {
    progress : 0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress});
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <LoadingBar
        color='#000000'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route exact path='/' element={<Newsbox setProgress={this.setProgress} apiKey={this.apiKey}  key="normal"/>}/>
            <Route exact path='/general'  element={<Newsbox setProgress={this.setProgress} apiKey={this.apiKey}   key="general" category="general" />}/>
            <Route exact path='/business'  element={<Newsbox setProgress={this.setProgress} apiKey={this.apiKey} key="business" category="business"/>}/>
            <Route exact path='/entertainment'  element={<Newsbox setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" category="entertainment"/>}/>
            <Route exact path='/health'  element={<Newsbox setProgress={this.setProgress} apiKey={this.apiKey}  key="health" category="health"/>}/>
            <Route exact path='/science' element={<Newsbox setProgress={this.setProgress} apiKey={this.apiKey}   key="science" category="science"/>}/>
            <Route exact path='/sports'  element={<Newsbox setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" category="sports"/>}/>
            <Route exact path='/technology'  element={<Newsbox setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" category="technology"/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}