import './assets';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

import NotFound from './components/NotFound';
import Main from './components/Main';
import Nav from './components/Nav';

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
      {/*<Route path='home' component={SomeOther}/>*/}
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
