import './assets';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

import {
  Nav,
  Main,
  Admin,
  NotFound
} from './components';

const App = ({ children }) => (
  <div>
    <Nav/>
    <div class="container-fluid">{children}</div>
  </div>
);

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Main}/>
      <Route path='main' component={Main}/>
      <Route path='admin' component={Admin}/>
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
