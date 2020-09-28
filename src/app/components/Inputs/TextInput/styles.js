import styled from "styled-components";

export const Wrapper = styled.label`
width:100%;
height:50px;
display:flex;
border:1px solid #bdbdbd;
padding:0 0.5em;
margin-bottom:10px;
&>div{
  height:100%;
  width:100px;
  font-weight:600;
  color:#616161;
  line-height:50px;
}
&>input{
  width:100%;
  height:100%;
  font-size:1em;
}
`;