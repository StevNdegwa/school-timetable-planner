import React from "react";
import PropTypes from "prop-types";
import {MdSettings, MdSupervisorAccount, MdEventNote, MdHome, MdSettingsPower} from "react-icons/md";
import {Wrapper, SideLink, Exit} from "./styles";

export default function Sidenav({exitApp, user}){
  return (<Wrapper>
    <div></div>
    <div>
      <SideLink to="/home" activeClassName="selected"><MdHome/></SideLink>
      <SideLink to="/schedule" activeClassName="selected"><MdEventNote/></SideLink>
      <SideLink to="/settings" activeClassName="selected"><MdSettings/></SideLink>
      {(user.email === "admin@timetableplanner.edu") && 
        <SideLink to="/admin" activeClassName="selected"><MdSupervisorAccount/></SideLink>
      }
    </div>
    <Exit onClick={()=>exitApp()}><MdSettingsPower/></Exit>
  </Wrapper>)
}

Sidenav.propTypes = {
  exitApp:PropTypes.func.isRequired,
  user:PropTypes.object.isRequired
}