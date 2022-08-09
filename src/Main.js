import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';

import GameDetail from './gameDetail/GameDetail';
import Home from './Home'

const history = createHistory();

const Main = () => (
  <main>
    <Switch history={history}>
      <Route exact path='/' component={Home}/>
      <Route path='/new' component={Home}/>
      <Route path='/topsellers' component={Home}/>
      <Route path='/genre/:genre' component={Home}/>
      <Route path='/game/:slug' component={GameDetail}/>
    </Switch >
  </main>
)

export default Main
