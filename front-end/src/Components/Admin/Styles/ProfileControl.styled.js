import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  height: 100vh;
  padding: 24px;
  font-family: "Source Sans Pro", sans-serif;
    margin: auto;
    @media screen and (max-width:768px) {
    font-size: small;
    width:100vw;
    overflow-x: scroll;
 }
    
`;
export const Table = styled.div`
  height: 100vh;
  overflow-y: scroll; 
  overflow-x: hidden;
  width: 100%;
  font-size: 16px;
  border: 1px solid #eee;
  background-color: white;
  @media screen and (max-width:768px) {
    font-size: small;
    overflow-x: scroll;
 }
`;
export const TableHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  background: #000;
  padding: 18px 0;
`;
export const TableHeader = styled.div`
  text-transform: uppercase;
  p {
    flex: 1 1 20%;
    text-align: center;
    color: white;
    position: relative;
    display: inline-block;
    padding-left: 24px;
    padding-right: 24px;
    cursor: default;
  }
`;
export const TableRowHolder = styled.div`
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-bottom: 100px !important;
  background-color: white;
`;
export const TableRow = styled.div`
  display: flex;
  width: 100%;
  padding: 18px 0;
  background-color: white;
  /* */
  /*  */
`;
export const TableData = styled.div`
  flex: 1 1 20%;
  text-align: center;
  flex: 1 1 20%;
  text-align: center;
`;
