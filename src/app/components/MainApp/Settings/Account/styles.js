import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
`;

export const Basic = styled.div`
width:100%;
height:600px;
padding:1em;
border-bottom:1px solid #bdbdbd;
& > form > div{
  color:red;
}
`;

export const Advanced = styled.div`
width:100%;
height:100%;
padding:1em;
`;

export const Input = styled.label`
height:50px;
margin:10px 0;
display:flex;
& > div{
  line-height:50px;
  font-weight:600;
}
&>div:first-child{
  width:200px;
}
&>div:last-child{
  width:50px;
  height:50px;
  text-align:center;
  color:#bdbdbd;
  & > svg{
    width:80%;
    height:100%;
  }
}
& input{
  border:1px solid #bdbdbd;
}
`;

export const Button = styled.button`
height:40px;
display:block;
padding:0 1em;
&:disabled{
  background-color:#bdbdbd !important;
}
`