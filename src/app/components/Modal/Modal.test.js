import React from "react";

import {shallow} from "enzyme";

import Modal from "./Modal.jsx";

describe("Test modal component", ()=>{
  const closeMock = jest.fn();
  
  test("Auth component renders without crashing", ()=>{
    shallow(<Modal visible={true} close={closeMock} />);
  });
})