import React from "react";
import PropTypes from "prop-types";
import {MdSettings, MdSupervisorAccount, MdEventNote, MdHome, MdSettingsPower} from "react-icons/md";
import {Wrapper, SideLink, Exit} from "./styles";

export default function Sidenav({openLogOutDialog, user}){
  return (<Wrapper>
    <div></div>
    <div>
      <SideLink to="/home" activeClassName="selected"><MdHome/></SideLink>
      <SideLink to="/schedule" activeClassName="selected"><MdEventNote/></SideLink>
      <SideLink to="/settings" activeClassName="selected"><MdSettings/></SideLink>
      {user.isAdmin && 
        <SideLink to="/admin" activeClassName="selected"><MdSupervisorAccount/></SideLink>
      }
    </div>
    <Exit onClick={()=>openLogOutDialog()}><MdSettingsPower/></Exit>
  </Wrapper>)
}

Sidenav.propTypes = {
  openLogOutDialog:PropTypes.func.isRequired,
  user:PropTypes.object
}