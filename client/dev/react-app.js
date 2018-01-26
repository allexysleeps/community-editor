import React from 'react';
import ReactDOM from 'react-dom';
import SuggestView from "./js/Views/SuggestView/SuggestView.jsx";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const appContainder = document.getElementById('app');

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <SuggestView/>
  </MuiThemeProvider>
, appContainder);