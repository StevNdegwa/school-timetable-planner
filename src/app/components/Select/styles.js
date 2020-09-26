import styled, {css} from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
position:relative;
border:1px solid #bdbdbd;
padding:0 0.2em;
&>div{
  display:flex;
  justify-content:space-between;
}
& div.icon{
  margin:0 0.5em;
}
`;

export const Label = styled.div`
width:100%;
height:20px;
line-height:20px;
font-weight:600;
color:#bdbdbd;
& svg{
  height:20px;
}
`
export const Active = styled.div`
width:100%;
height:30px;
line-height:30px;
cursor:pointer;
& svg{
  height:30px;
}
`;

export const Options = styled.ul`
width:100%;
height:100px;
position:absolute;
top:50px;
left:0px;
background-color:#eeeeee;
cursor:pointer;
border:1px solid #bdbdbd;
overflow:auto;
`;

export const Option = styled.li`
height:30px;
line-height:30px;
padding:0 0.5em;
&:last-child{
  border-radius:0px 0px 5px 5px;
}
&:hover{
  background-color:#bdbdbd;
}
`;

export const Info = styled.div`
min-width:200px;
padding:0.3em;
position:absolute;
left:100%;
top:0px;
background-color:#212121;
border:1px outset #212121;
border-radius:3px;
box-shadow:0px 0px 5px #424242;
color:white;
${({show})=> !show && css`
display:none !important;
`}
`;