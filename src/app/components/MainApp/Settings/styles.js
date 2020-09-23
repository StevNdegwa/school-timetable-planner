import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
`

export const Tabs = styled.div`
width:240px;
height:100%;
border-right:1px solid #bdbdbd;
&>div{
  height:60px;
  line-height:60px;
  font-weight:600;
  border-bottom:1px solid #bdbdbd;
  padding:0 0.5em;
  cursor:pointer;
  display:flex;
  &:hover{
    font-weight:800;
  }
  &>div:first-child{
    width:100%;
  }
  &>div:last-child{
    width:60px;
    text-align:center;
    &>svg{
      height:100%;
      width:60%;
    }
  }
}
`

export const Content = styled.div`
width:100%;
height:100%;
`;