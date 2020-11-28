import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Navigation from '../components/Navigation';
import Routes from '../helpers/Routes';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation/>
        <Routes/>
      </Router>
    );
  }
}

export default App;
