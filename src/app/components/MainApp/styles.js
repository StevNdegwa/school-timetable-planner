import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
`;

export const Header = styled.header`
width:100%;
height:80px;
background-color:#212dce;
border-bottom:1px solid #949aeb;
box-shadow:0px 3px 5px #e0e0e0;
display:flex;
justify-content:space-between;
& > div{
  min-width:100px;
}
`;

export const Main = styled.div`
width:100%;
height:calc(100% - 80px);
display:flex;
`;