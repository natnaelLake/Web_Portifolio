import React from "react";
import { Link } from "rebass";
import AddProfile from "./AddProfile";
import GetProfile from "./GetProfile";
import DeleteProfile from "./DeleteProfile";
import UpdateProfile from "./UpdateProfile";

export default function DisplayScreen() {
  return (
    <>
      <GetProfile />
      <AddProfile />
      <DeleteProfile />
      <UpdateProfile />
    </>
  );
}
