import styled from "styled-components";

import {NavLink} from "react-router-dom";

export const Wrapper = styled.div`
width:60px;
height:100%;
background-color:#212dce;
display:flex;
flex-direction:column;
justify-content:space-between;
`;

export const SideLink = styled(NavLink)`
height:50px;
width:50px;
margin:5px;
display:block;
line-height:40px;
text-align:center;
background-color:#949aeb;
box-shadow:0px 0px 3px #949aeb;
border-radius:10px;
transition:background-color 500ms, box-shadow 1s;
&.selected{
  background-color:#252d98;
  box-shadow:0px 0px 3px #252d98;
  color:#bdbdbd;
}
&>svg{
  width:30px;
  height:50px;
}
`;

export const Exit = styled.button`
width:60px;
height:50px;
display:block;
border-top:1px solid #bdbdbd;
text-align:center;
background-color:transparent;
&>svg{
  height:45px;
  width:30px;
}
`