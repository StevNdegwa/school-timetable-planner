import React from "react";
import {Route} from "react-router-dom";
import {MemoryRouter} from "react-router";

import {shallow, mount} from "enzyme";

import App from "./App";
import AuthView from "./containers/AuthView";
import MainAppView from "./containers/MainAppView";

let routesMap = {};

describe("Perform tests for App", ()=>{
  
  let app = shallow(<App/>);
  
  routesMap =  app.find(Route).reduce((rm, route)=>{
    rm[route.prop("path")] = route.children().first().name()
    return rm;
  }, {});
  
  test("All require routes are present", ()=>{
    expect(Object.keys(routesMap)).toEqual(expect.arrayContaining(["/", "/app/home"]));
  })
  
  test("If Auth component is rendered", ()=>{
    let component = mount(<MemoryRouter initialEntries={["/"]}>
      <App/>
    </MemoryRouter>)
    
    expect(component.find(AuthView)).toHaveLength(1);
  })
})