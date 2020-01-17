import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Builder from './components/team-builder/Builder';
import SavedTeam from './components/team-page/SavedTeam';
import './styles/App.css';
import './styles/responsive.css'

//TODO Fix Responsiveness (Fix pokeTeam Buttons )



class App extends Component {
  state = {
    team: []
  }

  getTeam = (userTeam) => {
    this.setState({
      team: userTeam
    })
  }


  render() {
    return (
      <Route>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' render={() => <h1>Pokemon Builder</h1>} />
            <Route exact path='/builder' render={() => <Builder saveTeam={this.getTeam} />} />
            <Route exact path='/my-team' render={() => <SavedTeam team={this.state.team} />} />
          </Switch>
        </div>
      </Route>
    )
  }
}

export default App;
