import React from "react";
import Contact from "./Contact";
import Resume from "./Resume";
import {   ContactBody, MainBody } from "../Styles/UserDesplay.styled";

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
