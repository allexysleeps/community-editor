import React from 'react';
import {Route} from "react-router";
import SuggestView from "./Views/SuggestView/SuggestView.jsx";
import SuggestResults from "./Views/SuggestResults/SuggestResults.jsx";

const Routes = (props) => {
  return (
    <div>
      <Route exact path='/fb' component={SuggestView}/>
      <Route exact path ='/fb/result' component={SuggestResults}/>
    </div>
  )
};

export default Routes;