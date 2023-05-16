import styled from "styled-components";



export const ResumeButton  = styled.button`
/* display: block; */
     background: ${props => props.$primary ? "white" : "palevioletred"};
  color: ${props => props.$primary ? "palevioletred" : "white"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  height: 60px;
  /* width: fit-content; */
  margin-left: 200px;
  &:hover{
    background: ${props => props.$primary ? "palevioletred" : "white"};
  color: ${props => props.$primary ? "white" : "palevioletred"};
  }
  @media screen and (max-width:768px){
    width: 100%;
    padding-left: 0;
    margin-left: 0;
  }
`