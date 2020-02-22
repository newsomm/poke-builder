import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/UI/NavBar/Navbar'
import Builder from './components/builder/Builder';
import SavedTeam from './components/team-page/SavedTeam';
import SideDrawer from './components/UI/SideDrawer/SideDrawer';
import './App.css';

//TODO search by name 
class App extends Component {
  state = {
    team: [],
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
            <Route exact path='/my-team' render={() => <SavedTeam editTeam={this.editTeam} deleteTeam={this.deleteTeam} />} />
          </Switch>
          <SideDrawer close={this.sideDrawerClosed} open={this.state.showSideDrawer} />
        </div>
      </Route>
    )
  }
}

export default App;
