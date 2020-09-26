import styled, {css} from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(69, 90, 100, 0.5);
${({visible})=> !visible && css`
display:none !important;
`}
& > div.space{
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
}
& > span.content{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
}
`;

export const Header = styled.div`
width:100%;
height:50px;
padding:0 1em;
border-top:1px solid #bdbdbd;
display:flex;
justify-content:space-between;
line-height:50px;
`;

export const Main = styled.div`
width:100%;
height:auto;
border-top:1px solid #bdbdbd;
padding:0.5em;
`;

export const Footer = styled.div`
width:100%;
height:50px;
padding:5px;
border-top:1px solid #bdbdbd;
display:flex;
justify-content:space-between;
& > span > button{
  height:40px;
  padding:1em;
  margin:0 10px;
}
`