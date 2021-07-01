import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './index.css';
import App from './App';



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/"><App /></Route>
        <Redirect to="/"><App /></Redirect>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);


