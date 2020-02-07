import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Builder from './components/team-builder/Builder';
import SavedTeam from './components/team-page/SavedTeam';
import './styles/App.css';
import './styles/responsive.css'

//TODO Fix Responsiveness (Fix pokeTeam Buttons )
//TODO Editing Moves (forms loaded )
//TODO search by name 

//*Possible Feature: Make multiple teams 

class App extends Component {
  state = {
    team: [],
    selectedMoveSet: [],
    editingTeam: false
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


  editTeam = () => {
    this.setState({
      editingTeam: true
    })
  }

  getSelectedMoves = (name, moves) => {
    window.localStorage.setItem(
      `${name}`,
      JSON.stringify(moves))
  }

  deleteTeam = () => {
    this.setState({
      team: [],
      editingTeam: false
    }, () => {
      window.localStorage.clear()
    })
  }

  render() {
    return (
      <Route>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/builder' render={() => <Builder saveTeam={this.getTeam} userTeam={this.state.editingTeam ? JSON.parse(window.localStorage.getItem('savedTeam')) : ''} />} />
            <Route exact path='/my-team' render={() => <SavedTeam team={this.state.team} editTeam={this.editTeam} deleteTeam={this.deleteTeam} getMoves={this.getSelectedMoves} />} />
          </Switch>
        </div>
      </Route>
    )
  }
}

export default App;
