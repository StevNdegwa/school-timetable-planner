import React from "react";
import {MdSettings, MdSupervisorAccount, MdInsertInvitation, MdHome, MdSettingsPower} from "react-icons/md";
import {Wrapper, SideLink, Exit} from "./styles";

export default function Sidenav(){
  return (<Wrapper>
    <div></div>
    <div>
      <SideLink to="/home" activeClassName="selected"><MdHome/></SideLink>
      <SideLink to="/schedule" activeClassName="selected"><MdInsertInvitation/></SideLink>
      <SideLink to="/settings" activeClassName="selected"><MdSettings/></SideLink>
      <SideLink to="/admin" activeClassName="selected"><MdSupervisorAccount/></SideLink>
    </div>
    <Exit><MdSettingsPower/></Exit>
  </Wrapper>)
}