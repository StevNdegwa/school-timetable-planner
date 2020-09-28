import styled, {keyframes} from "styled-components";
import {FiLoader} from "react-icons/fi";

export const Wrapper = styled.div`
width:100%;
height:100%;
padding:1em;
`;

export const Status = styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
right:0;
background-color:rgba(69, 90, 100, 0.5);
display:flex;
justify-content:center;
text-align:center;
`

const dataLoaderAnim = keyframes`
from{
  transform:rotate(0deg);
}
to{
  transform:rotate(360deg);
}
`;

export const Loader = styled(FiLoader)`
width:50px;
height:100%;
color:#eeeeee;
animation-name:${dataLoaderAnim};
animation-iteration-count:infinite;
animation-duration:1s;
animatio-timing-function:linear;
`;

export const Table = styled.div`
width:100%;
display:table;
border:1px solid #bdbdbd;
`;

export const Row = styled.div`
width:100%;
height:50px;
display:table-row;
&.heading{
  background-color:#bdbdbd;
  color:white;
  & > div{
    font-weight:600;
  }
} 
&:not(:last-child) > div{
  border-bottom:1px solid #bdbdbd;
}
`;


export const Cell = styled.div`
height:100%;
line-height:50px;
font-weight:600;
display:table-cell;
text-align:center;
&:not(:last-child){
  border-right:1px solid #bdbdbd;
}
&.edit{
  width:50px;
  &>button{
    display:inline-block;
    width:100%;
    height:100%;
  }
}
`;