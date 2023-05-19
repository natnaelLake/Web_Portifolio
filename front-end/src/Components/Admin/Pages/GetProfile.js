import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA } from "../../../Redux/Saga/Types/ActionTypes";
import "./TableStyle.css";
import SideBar from "./SideBar";

export default function GetProfile() {
  const data = useSelector((state) => state.profile.profileData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_DATA });
  }, []);
  return (
    <div>
      <SideBar />
      <div class="container">
        <div class="table">
          <div class="table-header">
            <div class="header__item">
              <a id="name" class="filter__link" href="#">
                Title
              </a>
            </div>
            <div class="header__item">
              <a id="wins" class="filter__link filter__link--number" href="#">
                Description
              </a>
            </div>
            <div class="header__item">
              <a id="draws" class="filter__link filter__link--number" href="#">
                Used Techs
              </a>
            </div>
            <div class="header__item">
              <a id="losses" class="filter__link filter__link--number" href="#">
                Links
              </a>
            </div>
            <div class="header__item">
              <a id="losses" class="filter__link filter__link--number" href="#">
                Status
              </a>
            </div>
            <div
             class="header__item">
              <a id="total" class="filter__link filter__link--number" href="#">
                Status
              </a>
            </div>
          </div>
          {data && data.map((file) => (
            <div class="table-content">
              <div class="table-row">
                <div class="table-data">{file.title}</div>
                <div class="table-data">{file.description}</div>
                <div class="table-data">{file.usedTech}</div>
                <div class="table-data">{file.link}</div>
                <div class="table-data">Update</div>
                <div class="table-data">Delete</div>
              </div>
          
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
