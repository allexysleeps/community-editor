import React from 'react';
import {Route} from "react-router";
import SuggestView from "./Views/SuggestView/SuggestView.jsx";

const Routes = (props) => {
  return (
    <div>
      <Route exact path='/fb' component={SuggestView}/>
      <Route exact path ='/fb/result' component={() => <h1>Test</h1>}/>
    </div>
  )
};

export default Routes;