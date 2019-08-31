// @flow
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/404';

const Main: React.SFC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default Main;
