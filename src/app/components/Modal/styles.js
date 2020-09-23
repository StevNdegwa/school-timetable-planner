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