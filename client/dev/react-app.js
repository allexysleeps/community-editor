import React from 'react';
import ReactDOM from 'react-dom';
import SuggestView from "./js/Views/SuggestView/SuggestView.jsx";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
require('./styles/main.sass');

const appContainer = document.getElementById('app');

ReactDOM.render(
  <MuiThemeProvider >
    <SuggestView/>
  </MuiThemeProvider>
, appContainer);