import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Daily from './Components/Daily';
import Content from './Content';
import Weather from './Components/Weather';
import Horoscopeee from './Components/Horoscopeee';
// import Fact from './Components/Fact';
// import nature from './Components/background.png';

export default class App extends Component {
  apiKey=process.env.REACT_APP_API;
  // apiKey='0999201e78ae422b9d2cb230ee4ef610'
  render() {
    return (
      <div style={{color:'black',backgroundImage:"url(/background.png)"}}>
        <Router basename='/newsblog-1'>
          <Navbar />
          {/* <Daily/> */}
          <Routes>
            <Route exact path="/" element={<News key='general' apiKey={this.apiKey}  pageSize={6} country='us' category='general' />} />
            <Route exact path="/business" element={<News key='business' apiKey={this.apiKey}  pageSize={6} country='us' category='business' />} />
            <Route exact path="/sports" element={<News key='sports' apiKey={this.apiKey} pageSize={6} country='us' category='sports' />} />
            <Route exact path="/technology" element={<News key='technology' apiKey={this.apiKey} pageSize={6} country='us' category='technology' />} />
            <Route exact path="/science" element={<News key='science'  apiKey={this.apiKey} pageSize={6} country='us' category='science' />} />
            <Route exact path="/health" element={<News key='health' apiKey={this.apiKey} pageSize={6} country='us' category='health' />} />
            <Route exact path="/content" element={<Content key='content' category='content' />} />
            <Route exact path="/weather" element={<Weather key='weather ' category='weather ' />} />
            <Route exact path="/horoscope" element={<Horoscopeee key='horoscopeee' category='horoscopeee ' />} />
          </Routes>
        </Router>
      </div>

    )
  }
}



