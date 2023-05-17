import styled from "styled-components";

export const ResumeButton = styled.button`
  background: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  height: 60px;
  a {
    color: white;
  }
  &:hover {
    background: black;
    border: 2px solid black;
    color: white ;
  }
  @media screen and (max-width: 768px) {
    width: 80vw;
    padding-left: 0;
    margin-left: 0;
  }
`;
