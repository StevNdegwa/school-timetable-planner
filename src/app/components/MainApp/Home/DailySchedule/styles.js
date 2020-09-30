import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
padding:2em;
`;

export const Lessons = styled.div`
width:100%;
height:100%;
border:2px solid #bdbdbd;
border-radius:5px;
overflow:auto;
box-shadow:inset 0px 0px 3px #bdbdbd;
`

export const Lesson = styled.div`
width:calc(100% - 10px);
margin:5px;
border:1px outset #bdbdbd;
background-color:#eeeeee;
border-radius:5px;
cursor:pointer;
&>div{
  height:30px;
  line-height:30px;
  padding:0 0.5em;
  &.class{
    font-size:1.3em;
    font-weight:600;
  }
  &.time span.label{
    font-weight:600;
  }
  &.add-to-calendar{
    height:50px;
    padding:5px;
    text-align:right;
    &>button{
      height:40px;
      padding:0 1em;
    }
  }
}

`