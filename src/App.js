
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News.js';

// in class base and function base component state and props are little bit diff.
// in this class base component management of methods is quite easy.

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
