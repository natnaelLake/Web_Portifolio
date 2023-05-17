import styled from "@emotion/styled";

export const ContactBody = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-y: scroll;
  @media screen and (max-width:768px){
    flex-direction:column-reverse;
    overflow-y: scroll;
  }
`;
export const MainBody = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  /* overflow-y: scroll; */
`;
export const CardList = styled.div`

`
