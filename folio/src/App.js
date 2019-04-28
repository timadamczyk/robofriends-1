import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Tachyons from 'tachyons';

import Navigation from './components/Navigation';
import Projects from './components/Projects/Projects';
import About from './components/About';


class App extends Component {
  render() {
    return (
      <div> 
          
          
      <div> 
            <Navigation />
      </div> 

      <About/>
      
      <Projects/> 
      
       </div> 
    );
  }
}

export default App;