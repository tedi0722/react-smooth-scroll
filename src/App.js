import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section id="section1" title="Section 1 Title" paragraph="Section 1 Paragraph" />
        <Section id="section2" title="Section 2 Title" paragraph="Section 2 Paragraph" />
        <Section id="section3" title="Section 3 Title" paragraph="Section 3 Paragraph" />
      </div>
    );
  }
}

export default App;
