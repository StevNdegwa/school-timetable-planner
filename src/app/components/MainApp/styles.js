import styled, {keyframes} from "styled-components";
import {FiLoader} from "react-icons/fi";

export const Wrapper = styled.div`
width:100%;
height:100%;
position:relative;
`;

export const Header = styled.header`
width:100%;
height:80px;
background-color:#212dce;
border-bottom:1px solid #949aeb;
box-shadow:0px 3px 5px #e0e0e0;
display:flex;
justify-content:space-between;
& > div{
  min-width:100px;
}
`;

export const Main = styled.div`
width:100%;
height:calc(100% - 80px);
display:flex;
`;


const appLoaderAnim = keyframes`
from{
  transform:rotate(0deg);
}
to{
  transform:rotate(360deg);
}
`;

export const AppLoader = styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
display:flex;
justify-content:center;
align-items:center;
background-color:rgba(69, 90, 100, 0.5);
&>div{
  width:200px;
  height:200px;
  text-align:center;
  background-color:white;
  border:2px outset white;
  border-radius:5px;
  display:flex;
  flex-direction:column;
  &>div.spinner{
    height:100%;
    width:100%
  }
  &>div.label{
    width:100%;
    height:50px;
    line-height:50px;
  }
}
`;

export const Spinner = styled(FiLoader)`
width:100px;
height:100%;
animation-name:${appLoaderAnim};
animation-iteration-count:infinite;
animation-duration:1s;
animatio-timing-function:linear;
`;