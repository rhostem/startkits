import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Intro from './components/Intro';
import TodoPage from './containers/TodoPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Intro} />
    <Route path="intro" component={Intro} />
    <Route path="todo" component={TodoPage} />
  </Route>
);
