import styled from "@emotion/styled";

export const ContactBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 45px;
  /* overflow-y: scroll; */
  @media screen and (max-width:768px){
    height: max-content;
    flex-direction:column-reverse;
    align-items: center;
    margin:20px;
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
