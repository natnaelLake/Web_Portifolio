import React from "react";
import "./sty.css";
import {RxDashboard} from 'react-icons/rx'
export default function SideBar() {
  return (
    <div>
          <nav class="main-menu">
            <ul>
              <li>
                <a href="/dashboard">
                  <i class="fa fa-tachometer fa-2x"></i>
                  <span class="nav-text">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/addProfile">
                  <i class="fa fa-plus fa-2x"></i>
                  <span class="nav-text">Add Profile Data</span>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/editProfile">
                  <i class="fa fa-edit fa-2x"></i>
                  <span class="nav-text">Update Profile Data</span>
                </a>
              </li>
              {/* <li class="has-subnav">
                <a href="#">
                  <i class="fa fa-trash-o fa-2x"></i>
                  <span class="nav-text">Delete Profile Data</span>
                </a>
              </li> */}
              <li class="has-subnav">
                <a href="/editResume">
                  <i class="fa fa-file fa-2x"></i>
                  <span class="nav-text">Edit Resume</span>
                </a>
              </li>
            </ul>
            <ul class="logout">
              <li>
                <a href="/logout">
                  <i class="fa fa-power-off fa-2x"></i>
                  <span class="nav-text">Logout</span>
                </a>
              </li>
            </ul>
          </nav>
    </div>
  );
}
