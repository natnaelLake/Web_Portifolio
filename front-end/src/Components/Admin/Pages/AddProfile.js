import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_DATA } from "../../../Redux/Saga/Types/ActionTypes";
import { AddButton, AddContainer, AddForm, AddInput, BackDiv, Shape1, Shape2 } from "../Styles/DisplayScreen";

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
    <AddContainer style={{marginTop:'550px'}}>
      <BackDiv >
        <Shape1 ></Shape1>
        <Shape2 ></Shape2>
      </BackDiv>
      <AddForm>
        <h3>Add Your Data</h3>
        <AddInput
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
        <AddInput
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
        <AddInput
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
        <AddInput
          type="text"
          name=""
          id="username"
          placeholder="Technologies"
          value={controller}
          onChange={(e) => {
            setController(e.target.value);
          }}
        />
        <AddButton onClick={(e) => handleTech(e)}>Add Other</AddButton>
        <AddButton
          type="submit"
          name=""
          id=""
          // value="Submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </AddButton>
      </AddForm>
    </AddContainer >
  );
}
