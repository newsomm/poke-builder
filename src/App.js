import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/UI/NavBar/Navbar'
import Builder from './components/builder/Builder';
import SavedTeam from './components/team-page/SavedTeam';
import './App.css';
import SideDrawer from './components/UI/SideDrawer/SideDrawer';

//TODO Fix Responsiveness (Fix pokeTeam Buttons )
//TODO Editing Moves (forms loaded )
//TODO search by name 

//*Possible Feature: Make multiple teams 

class App extends Component {
  state = {
    team: [],
    selectedMoveSet: [],
    editingTeam: false,
    showSideDrawer: false
  }

  getTeam = (userTeam) => {
    this.setState({
      team: userTeam
    }, this.syncTeamStorage)
  }

  syncTeamStorage = () => {
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
  sideDrawerClosed = () => {
    this.setState({
      showSideDrawer: false
    })
  }

  sideDrawerOpen = () => {
    this.setState(prevState => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      }
    })
  }

  render() {
    return (
      <Route>
        <div>
          <Navbar open={this.sideDrawerOpen} />
          <Switch>
            <Route exact path='/' render={() => <Builder saveTeam={this.getTeam} userTeam={this.state.editingTeam ? JSON.parse(window.localStorage.getItem('savedTeam')) : ''} />} />
            <Route exact path='/my-team' render={() => <SavedTeam team={this.state.team} editTeam={this.editTeam} deleteTeam={this.deleteTeam} getMoves={this.getSelectedMoves} />} />
          </Switch>
          <SideDrawer close={this.sideDrawerClosed} open={this.state.showSideDrawer} />
        </div>
      </Route>
    )
  }
}

export default App;
