import React from 'react'

//Routes
import NotFound from './NotFound'
import Home from './../Home';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />  
        <Route component={NotFound} />  
      </Switch>
    </BrowserRouter>
  )
}

export default Routes