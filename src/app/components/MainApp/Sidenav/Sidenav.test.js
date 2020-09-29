import React from "react";
import {MdSettings, MdSupervisorAccount} from "react-icons/md";
import Sidenav from "./Sidenav.jsx";
import {SideLink} from "./styles";
import {shallow, mount} from "enzyme";

describe("Test Sidenav component", ()=>{
  const openLogOutDialog = jest.fn();
  
  const sidenav = shallow(<Sidenav user={{isAdmin:true}} openLogOutDialog={openLogOutDialog} />);
  
  test("If role-based access is properly set", ()=>{
    expect.assertions(4);
    expect(sidenav.contains(<SideLink to="/settings" activeClassName="selected"><MdSettings/></SideLink>)).toBeFalsy();
    expect(sidenav.contains(<SideLink to="/admin" activeClassName="selected"><MdSupervisorAccount/></SideLink>)).toBeTruthy();
    sidenav.setProps({user:{isAdmin:false}});
    expect(sidenav.contains(<SideLink to="/settings" activeClassName="selected"><MdSettings/></SideLink>)).toBeTruthy();
    expect(sidenav.contains(<SideLink to="/admin" activeClassName="selected"><MdSupervisorAccount/></SideLink>)).toBeFalsy();
  })
})