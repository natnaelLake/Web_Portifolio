import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_DATA } from "../../../Redux/Saga/Types/ActionTypes";
import './login.css'


export default function AddProfile() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [controller, setController] = useState("");
  const [usedTech, setUsedTech] = useState([]);
  const profile = useSelector((state) => state.profile.profileData);
  const dispatch = useDispatch();
  let usedTecArray = [];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("on submit is called");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("link", link);
    formData.append("usedTech", usedTech);
    console.log(formData);
    dispatch({ type: ADD_DATA, formData });
  };
  const handleTech = (e) => {
    e.preventDefault();
    usedTech.length !== 0
      ? usedTech.map((value) => {
          usedTecArray.push(value);
        })
      : usedTecArray.push(controller) && setController("");
    usedTech.length !== 0
      ? usedTecArray.push(controller) && setController("")
      : setController("");
    setUsedTech(usedTecArray);
  };

  return (
    <div>
      {/* <form>
        <input
          type="text"
          name=""
          id=""
          placeholder="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          name=""
          id=""
          placeholder="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          name=""
          id=""
          placeholder="Link"
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          name=""
          id=""
          placeholder="Technologies"
          value={controller}
          onChange={(e) => {
            setController(e.target.value);
          }}
        />
        <br />
        <button onClick={(e) => handleTech(e)}>Add Other</button>
        <input
          type="submit"
          name=""
          id=""
          value="Submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        />

      </form> */}
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form>
        <h3>Add Your Data</h3>
{/* 
        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" /> */}
        <input
          type="text"
          name=""
          id="username"
          placeholder="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          
        />
        <br />
        <input
          type="text"
          name=""
          id="username"
          placeholder="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          name=""
          id="username"
          placeholder="Link"
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          name=""
          id="username"
          placeholder="Technologies"
          value={controller}
          onChange={(e) => {
            setController(e.target.value);
          }}
        />
        <button onClick={(e) => handleTech(e)}>Add Other</button>
        <button
          type="submit"
          name=""
          id=""
          // value="Submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >Submit</button>
        {/* <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button> */}
        {/* <div class="social">
          <div class="go">
            <i class="fab fa-google"></i> Google
          </div>
          <div class="fb">
            <i class="fab fa-facebook"></i> Facebook
          </div>
        </div> */}
      </form>
    </div>
  );
}
