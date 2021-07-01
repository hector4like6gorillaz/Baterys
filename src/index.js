import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './index.css';
import App from './App';
import { Login } from './components/views/login/Login';



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/login"><Login /></Route>
        <Route path="/nada"><App /></Route>
        <Redirect to="/login"><Login /></Redirect>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);


