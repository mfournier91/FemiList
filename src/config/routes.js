import React from 'react';
import {Router , Route, IndexRoute, browserHistory} from 'react-router';
import Main from '../Main';
import Home from '../Home';
import Bechdel from '../Bechdel';

var routes = (
  <Router history={browserHistory}>
    <Route path='/FemiList' component={Main} >
      <IndexRoute component={Home} />
      <Route path='/FemiList/bechdel' component={Bechdel} />
    </Route>
  </Router>
);

module.exports = routes;
