import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Builder from './components/team-builder/Builder';
import SavedTeam from './components/team-page/SavedTeam';
import './styles/App.css';
import './styles/responsive.css'

//TODO Fix Responsiveness (Fix pokeTeam Buttons )
//TODO Editing Moves (forms loaded )
//TODO editing teams 
//TODO search by name 

//*Possible Feature: Make multiple teams 

class App extends Component {
  state = {
    team: [],
    selectedMoveSet: []
  }

  getTeam = (userTeam) => {
    //! using the function inside the setState as an argument allows us to call a function after state is set (use instead of async)
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


  //TODO **************
  getSelectedMoves = (name, moves) => {
      window.localStorage.setItem(
        `${name}`,
        JSON.stringify(moves))
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
            <Route exact path='/' render={() => <Builder saveTeam={this.getTeam} />} />
            <Route exact path='/builder' render={() => <Builder saveTeam={this.getTeam} />} />
            <Route exact path='/my-team' render={() => <SavedTeam team={this.state.team} deleteTeam={this.deleteTeam} getMoves={this.getSelectedMoves} />} />
          </Switch>
        </div>
      </Route>
    )
  }
}

export default App;
