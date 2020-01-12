import React, { Component } from 'react';
import './styles/App.css';
import './styles/responsive.css'
import Builder from './components/team-builder/Builder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Builder />
      </div>
    );
  }

}

export default App;
