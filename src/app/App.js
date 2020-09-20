import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import Auth from "./components/Auth";
import FirebaseContext from "./FirebaseContext";
import Firebase from "./Firebase";

export default function App(){
  return (
    <FirebaseContext.Provider value={new Firebase()}>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Auth/>
        </Route>
        <Route>
          <div>
            <p>Page was not found. <Link to="/">Got to home</Link></p>
          </div>
        </Route>
      </Switch>
    </Router>
    </FirebaseContext.Provider>
  );
}