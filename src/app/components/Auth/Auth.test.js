import React from "react";

import {shallow} from "enzyme";

import Auth from "./Auth.jsx";
import Signup from "./Signup";
import Login from "./Login";

describe("AuthN components testing", ()=>{
  const setCurrentUserMock = jest.fn(),
    setSuccessfulMock = jest.fn(),
    setLoadingMock = jest.fn(),
    setErorMock = jest.fn();
  
  test("Auth component renders without crashing", ()=>{
    shallow(<Auth setCurrentUser={setCurrentUserMock}/>);
  });
  
  test("Auth component to contain Login component", ()=>{
    const authn = shallow(<Auth setCurrentUser={setCurrentUserMock}/>);
    expect(authn.find(Login)).toHaveLength(1);
  });
  
  test("Signup component renders without crashing", ()=>{
    shallow(<Signup setSuccessful={setSuccessfulMock} setLoading={setLoadingMock} setError={setErorMock}/>);
  });
  
  test("Auth component renders without crashing", ()=>{
    shallow(<Login setSuccessful={setSuccessfulMock} setLoading={setLoadingMock} setError={setErorMock}/>);
  });
})