import styled from "@emotion/styled";

export const AddForm = styled.form`
  margin-top: 60px;
  height: max-content;
  width: 400px;
  background-color: rgba(255, 25, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  overflow: hidden;
  border-radius: 50px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
  color: green;
  * {
    font-family: "Poppins", sans-serif;
    /* color: #ffffff; */
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  }
  h3 {
    font-size: 32px;
    color: green;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
  }
  @media screen and (max-width:768px) {
    max-width: 200px;
    margin-left: 30px;
    
  }
`;

export const AddInput = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  color: green;
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  ::placeholder {
    color: #080710;
  }
`;
export const AddButton = styled.button`
  margin-top: 35px;
  width: 45%;
  margin-left: 5%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: palevioletred;
        color: white;
  }
`;
export const AddContainer = styled.div`
  /* justify-content: center; */
  /* margin-top: 500px; */
  overflow: hidden;
  align-items: center;
  width: 500px;
  display: flex;
  flex-direction: row;
`;
export const BackDiv = styled.div`
  margin-top:90px;
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;
export const Shape1 = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(#1845ad, #23a2f6);
  left: -80px;
  top: -80px;
`;
export const Shape2 = styled.div`
margin-top: -100px;
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(to right, #ff512f, #f09819);
  right: -30px;
  bottom: -80px;
`;
export const Resume =styled.div`
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const UploadButton = styled.button`
    font-size: 25px;
    width:150px;
    height: 80px;
    margin: auto;
    margin-left: 80px;
    border-radius: 10px;
    background-color:palevioletred; 
    color: white;
    &:hover{
        background-color: ${(props => props.$delete ? 'red':'green')};
        color: white;
    }
`