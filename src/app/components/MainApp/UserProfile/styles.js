import styled, {css} from "styled-components";

export const Wrapper = styled.div`
width:100px;
height:100%;
position:relative;
border-left:1px solid #949aeb;
box-sizing:content-box;
direction:rtl;
`;

export const Control = styled.div`
width:100%;
height:100%;
text-align:center;
cursor:pointer;
color:#eeeeee;
background-color:transparent;
box-shadow:none;
transition:background-color 300ms, box-shadow 400ms;
&:hover{
  background-color:#283593;
  box-shadow:inset 0px 0px 5px #1a237e;
}
&>svg{
  height:100%;
  width:50px;
}
`;

export const Content = styled.div`
width:200px;
min-height:50px;
position:absolute;
top:100%;
border:1px solid #bdbdbd;
box-shadow:0px 0px 5px #bdbdbd;
${({visible}) => !visible && css`
display:none !important;
`}
`