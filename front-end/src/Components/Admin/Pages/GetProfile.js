import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA } from "../../../Redux/Saga/Types/ActionTypes";

export default function GetProfile() {
  const data = useSelector((state) => state.profile.profileData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_DATA });
  }, []);

  console.log(data);
  return;
  <div>{JSON.stringify(data)}</div>;
}
