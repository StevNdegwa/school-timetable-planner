import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
display:grid;
grid-template-columns:50% 50%;
grid-template-rows:60px calc(100% - 60px);
grid-template-areas:
  'status status'
  'calendar assignments';
overflow:auto;
@media only screen and (max-width:900px){
grid-template-columns:100%;
grid-template-rows:60px auto auto;
grid-template-areas:
  'status'
  'calendar'
  'assignments';  
}
`
;

export const Status = styled.div`
grid-area:status;
border-bottom:1px solid #bdbdbd;
line-height:60px;
padding:0 1em;
font-size:1.4em;
font-weight:bold;
`;