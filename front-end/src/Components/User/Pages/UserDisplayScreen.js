import React from "react";
import Contact from "./Contact";
import Resume from "./Resume";
import {  CardList, ContactBody, MainBody } from "../Styles/UserDesplay.styled";
import ProfileData from "./ProfileData";

export default function UserDisplayScreen() {
  return (
    <MainBody>
      <ContactBody>
        <Contact />
        <Resume />
      </ContactBody>
    </MainBody>
  );
}
