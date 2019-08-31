import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  )
}

export default Main
