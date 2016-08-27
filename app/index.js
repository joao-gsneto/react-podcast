import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import App from './components/app';
import Home from './components/home';
import PlaySong from './components/playsong';

const NotFound = () => (<h1>404.. This page is not found!</h1>)

import 'react-toolbox/lib/commons.scss';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/playsong/:songId' component={PlaySong} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
), document.getElementById('app'));
