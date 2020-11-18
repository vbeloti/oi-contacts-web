import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Manager from '../pages/Manager';
import Register from '../pages/Register';
import List from '../pages/List';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>

    <Route path="/create" component={Register} />
    <Route path="/peoples" component={Manager} />
    <Route path="/list" component={List} />
    <Route path="/" exact component={Home} />

    {/* <Route path="/rooms" exact component={Rooms} /> */}
  </Switch>
);

export default Routes;
