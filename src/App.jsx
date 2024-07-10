import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage/HomePage';
import AboutPage from './Pages/About/About';
import LogementPage from './Pages/Logement/Logement';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/logement" component={LogementPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;