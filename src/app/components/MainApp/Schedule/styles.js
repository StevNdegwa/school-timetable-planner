import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
overflow:auto;
`;

export const Header = styled.header`
width:100%;
height:60px;
border-bottom:1px solid #bdbdbd;
&>div.filter{
  height:100%;
}
&>div.filter.day{
  width:300px;
}
`

export const Main = styled.div`
width:100%;
height:calc(100% - 60px);
`