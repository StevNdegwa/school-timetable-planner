import styled, {css} from "styled-components";

export const Wrapper = styled.div`
width:350px;
background-color:white;
${({visible})=> !visible && css`
display:none !important;
`}
`;