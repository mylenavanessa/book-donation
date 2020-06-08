import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/dashboard' component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  )
}