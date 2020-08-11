import React, { Component } from 'react';
import './App.scss';
import UpperSection from './components/UpperSection';
import DownSection from './components/DownSection';

class App extends Component {
  render() {
    return (
      <main className="app">
        <UpperSection></UpperSection>
        <hr></hr>
        <DownSection></DownSection>
      </main>
    );
  }
}

export default App;
