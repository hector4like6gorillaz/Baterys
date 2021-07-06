import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Login } from './components/views/login/Login';

import './index.css';
import App from './App';
import { Bitacora } from './components/views/bitacora/Bitacora';




ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route path="Baterys/nada"><App /></Route>
        <Route path="/bitacora"><Bitacora /></Route>
        <Redirect to="/"><Login /></Redirect>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);


