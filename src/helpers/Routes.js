import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Portfolio from '../views/Portfolio';
import Contact from '../views/Contact';
import NotFound from '../views/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/'><Home/></Route>
      <Route exact path='/about'><About/></Route>
      <Route exact path='/portfolio'><Portfolio/></Route>
      <Route exact path='/contact'><Contact/></Route>
      <Route><NotFound/></Route>
    </Switch>
  );
}
