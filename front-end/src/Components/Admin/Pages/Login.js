import React, { useState } from "react";
// import "./login.css";
import { LOGIN } from "../../../Redux/Saga/Types/ActionTypes";
import {
  AddButton,
  AddContainer,
  AddForm,
  AddInput,
  BackDiv,
  Shape1,
  Shape2,
  SocialMedia,
  FaceBook,
  Google,
  Button,
} from "../Styles/DisplayScreen";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "../Styles/ErrorHandler.styled";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const profile = useSelector((state) => state.profile.profileData);
  const user = useSelector((state)=>state.profile.user)
  const errors = useSelector(state=>state.profile.errors) 
  console.log('Login Error',errors)
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {email,password}
    console.log('in login form fo:',formData)
    dispatch({ type: LOGIN, formData });
  };
  
  return (
    <AddContainer style={{ marginTop: "550px" }}>
      <BackDiv>
        <Shape1></Shape1>
        <Shape2></Shape2>
      </BackDiv>
      <AddForm>
        <h3>Login Here</h3>
        <AddInput
          type="text"
          name=""
          id="username"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Error>{errors !== null? errors.email:''}</Error>
        <br />
        <AddInput
          type="password"
          name=""
          id="username"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Error>{errors !== null? errors.password:''}</Error>
        <br />

        <AddButton
          type="submit"
          name=""
          id=""
          // value="Submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Login
        </AddButton>
        <SocialMedia class="social">
          <Button href="https://accounts.google.com/">
            <Google class="go">
              <i class="fa fa-google"></i> Google
            </Google>
          </Button>
          <Button href="https://facebook.com/">
            <FaceBook class="fb">
              <i class="fa fa-facebook"></i> Facebook
            </FaceBook>
          </Button>
        </SocialMedia>
      </AddForm>
    </AddContainer>
  );
}
