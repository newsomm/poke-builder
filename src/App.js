import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Builder from './components/team-builder/Builder';
import SavedTeam from './components/team-page/SavedTeam';
import './styles/App.css';
import './styles/responsive.css'

//TODO Fix Responsiveness (Fix pokeTeam Buttons )

//TODO Look through API to get moves, abilities, natures, etc  https://pokeapi.co/api/v2/pokemon/3/

//TODO Make it so the 'your team' and pokemon logo is hidden when user scrolls 


class App extends Component {
  state = {
    team: []
  }

  getTeam = (userTeam) => {
    this.setState({
      team: userTeam
    }, this.syncLocalStorage)
  }

  syncLocalStorage = () => {
    window.localStorage.setItem(
      'savedTeam',
      JSON.stringify(this.state.team)
    )
  }

  deleteTeam = () => {
    this.setState({
      team: []
    }, () => {
      window.localStorage.removeItem('savedTeam')
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
            <Route exact path='/my-team' render={() => <SavedTeam team={this.state.team} deleteTeam={this.deleteTeam} />} />
          </Switch>
        </div>
      </Route>
    )
  }
}

export default App;
