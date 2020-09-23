import React from "react";
import {MemoryRouter} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";

import {shallow, mount} from "enzyme";

import App from "../../App.js";
import MainApp from "./MainApp.jsx";
import Home from "./Home";

let routesMap = {};

describe("Test MainApp components", ()=>{
  const selectDate = jest.fn();
  
  const mainApp = shallow(<MainApp selectDate={selectDate} selectedDate={new Date().toString()} currentUser={{}} />);
  
  routesMap =  mainApp.find(Route).reduce((rm, route)=>{
    rm[route.prop("path")] = route.children().first().name()
    return rm;
  }, {});
  
  test("All routes are present", ()=>{
    expect(Object.keys(routesMap)).toEqual(expect.arrayContaining(["/home", "/schedule", "/settings", "/admin"]));
  })
  
  test("If MainApp renders without crashing", ()=>{
    shallow(<MainApp selectDate={selectDate} selectedDate={new Date().toString()} currentUser={{}} />);
  })
  
})