import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route , Switch , Redirect} from "react-router-dom";
import App from './App';
import Login from './login'


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/home" push/>} />
      <Route path="/home" component={ App } />
      <Route path="/login" component={ Login } />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
