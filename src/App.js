import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Builder from './components/team-builder/Builder';
import SavedTeam from './components/team-page/SavedTeam';
import './styles/App.css';
import './styles/responsive.css'

class App extends Component {
  render() {
    return (
      <Route>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' render={() => <h1>Pokemon Builder</h1>} />
            <Route exact path='/builder' render={() => <Builder />} />
            <Route exact path='/my-team' render={() => <SavedTeam />} />
          </Switch>
        </div>
      </Route>
    )
  }
}

export default App;
