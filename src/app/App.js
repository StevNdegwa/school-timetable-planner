import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {IconContext} from "react-icons";

import AuthView from "./containers/AuthView";
import MainAppView from "./containers/MainAppView";
import FirebaseContext from "./FirebaseContext";
import Firebase from "./helpers/Firebase";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import reducer from "./features/reducer";

const store = configureStore({reducer});

export default function App(){
  return (
    <Provider store={store}>
    <IconContext.Provider value={{className:"timetable-icons"}}>
    <FirebaseContext.Provider value={new Firebase()}>
    <Router>
      <Switch>
        <Route path="/app/home" exact>
          <MainAppView/>
        </Route>
        <Route path="/" exact>
          <AuthView/>
        </Route>
        <Route>
          <div>
            <p>Page was not found. <Link to="/">Got to home</Link></p>
          </div>
        </Route>
      </Switch>
    </Router>
    </FirebaseContext.Provider>
    </IconContext.Provider>
    </Provider>
  );
}