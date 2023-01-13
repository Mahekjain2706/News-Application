
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News.js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// in class base and function base component state and props are little bit diff.
// in this class base component management of methods is quite easy.


// top loading bar
export default class App extends Component {
  pageSize =  20;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/home" element={<News key="general"   pageSize={this.pageSize} country="in"   Ccolor="primary" category="general" />} />
            <Route exact path="business" element={<News key="business"   pageSize={this.pageSize} country="in"   Ccolor="success" category="business" />} />
            <Route exact path="entertainment" element=  {<News key="entertainment" pageSize={this.pageSize} country="in"  Ccolor="danger"  category="entertainment" />} />
            <Route exact path="general" element={<News key="general"   pageSize={this.pageSize} country="in"   Ccolor="primary" category="general" />} />
            <Route exact path="health" element={<News key="health"   pageSize={this.pageSize} country="in"   Ccolor="warning" category="health" />} />
            <Route exact path="science" element={<News key="science"   pageSize={this.pageSize} country="in"   Ccolor="success" category="science" />} />
            <Route exact path="sports" element={<News key="sports"   pageSize={this.pageSize} country="in"   Ccolor="danger" category="sports" />} />
            <Route exact path="technology" element=  {<News key="technology" pageSize={this.pageSize} country="in"   Ccolor="info" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
