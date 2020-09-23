import styled, {css} from "styled-components";

export const Wrapper = styled.div`
width:350px;
height:200px;
background-color:white;
${({visible})=> !visible && css`
display:none !important;
`}
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
height:100px;
border-top:1px solid #bdbdbd;
padding:1em;
line-height:50px;
font-weight:600;
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