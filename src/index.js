import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import App from './App';
// import Login from './login'
import Routers from './router/routerMap'
let token = localStorage['token'];

ReactDOM.render(
  <Router>
    <Switch>
      {Routers.map((item, index) => {
        return <Route key={index} path={item.path} render={props =>{
          return (!item.auth ? (<item.component {...props} routes={item.children}/>) : 
          (token ? <item.component {...props} routes={item.children}/> : 
          <Redirect to={{pathname: '/login',state: { from: props.location }}} />))
        }} />
      })}
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
