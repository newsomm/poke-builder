import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/UI/NavBar/Navbar'
import Builder from './components/builder/Builder';
import SavedTeam from './components/team-page/SavedTeam';
import SideDrawer from './components/UI/SideDrawer/SideDrawer';
import useToggleState from './hooks/useToggleState';
import './App.css';

const App = () => {
  const [editing, setEditing] = useState(false)
  const [showSideDrawer, drawerToggle] = useToggleState()

  const getTeam = (userTeam) => {
    window.localStorage.setItem(
      'savedTeam',
      JSON.stringify(userTeam)
    )
  }

  const editTeam = () => {
    setEditing(true)
  }

  const deleteTeam = () => {
    setEditing(false)
    window.localStorage.clear()
  }
  return (
    <div>
      <Navbar open={drawerToggle} />
      <Route exact path='/poke-builder/' render={() => <Builder saveTeam={getTeam} userTeam={editing ? JSON.parse(window.localStorage.getItem('savedTeam')) : ''} />} />
      <Switch>
        <Route exact path='/poke-builder/my-team' render={() => <SavedTeam editTeam={editTeam} deleteTeam={deleteTeam} />} />
      </Switch>
      <SideDrawer toggle={drawerToggle} open={showSideDrawer} />
    </div>
  )
}
export default App;
