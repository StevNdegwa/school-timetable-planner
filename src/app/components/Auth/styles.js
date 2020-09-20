import styled, {css} from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
`;

export const Header = styled.header`
width:100%;
height:70px;
box-shadow:0px 2px 5px #bdbdbd;
display:flex;
justify-content:space-between;
& > div{
  height:100%;
  line-height:70px;
  & svg{
    width:30px;
    height:70px;
  }
}
`;

export const Main = styled.div`
width:100%;
height:calc(100% - 70px);
overflow:auto;
`;

export const Content = styled.div`
width:400px;
margin:50px auto;
border:1px solid #bdbdbd;
box-shadow:0px 0px 5px #bdbdbd;
& > div.tabs{
  width:100%;
  height:50px;
  border-bottom:1px solid #bdbdbd;
  display:flex;
}
& form{
  padding:10px;
  & > div{
    min-height:20px;
    line-height:20px;
    text-align:center;
    color:red;
  }
}
`;

export const Tab = styled.div`
width:50%;
height:100%;
line-height:50px;
text-align:center;
cursor:pointer;
&:first-child{
  border-right:1px solid #bdbdbd;
}
${({active})=> active && css`
background-color:#cfd8dc;
font-weight:600;
`}
`;

export const Input = styled.label`
width:90%;
margin:0px auto;
height:40px;
display:block;
border:1px solid #bdbdbd;
border-radius:5px;
overflow:hidden;
& input{
  height:100%;
}
`;

export const Submit = styled.button`
height:40px;
width:40%;
min-width:100px;
margin:auto;
display:block;
`;