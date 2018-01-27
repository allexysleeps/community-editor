import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createHistory from 'history/createBrowserHistory';
import Routes from "./js/routes";
import Layout from "./js/Views/Layout/Layout";
require('./styles/main.sass');

const appContainer = document.getElementById('app');
export const history = createHistory();


ReactDOM.render(
  <MuiThemeProvider >
    <Router history={history}>
      <Layout>
        <Routes/>
      </Layout>
    </Router>
  </MuiThemeProvider>
, appContainer);