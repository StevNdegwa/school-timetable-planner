import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Sidenav from "./Sidenav";
import {Wrapper, Header, Main} from "./styles";

export default function UserApp(){
  return (<Wrapper>
    <Header>
    
    </Header>
    <Main>
      <Router basename="/app">
        <Sidenav/>
        <Switch>
          <Route path="/home" exact>
            <div>Home</div>
          </Route>
          <Route path="/schedule" exact>
            <div>Schedule</div>
          </Route>
          <Route path="/settings" exact>
            <div>Settings</div>
          </Route>
          <Route path="/admin" exact>
            <div>Admin</div>
          </Route>
        </Switch>
      </Router>
    </Main>
  </Wrapper>)
}