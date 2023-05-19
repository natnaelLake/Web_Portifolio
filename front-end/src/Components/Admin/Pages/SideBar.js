import React from "react";
import {RxDashboard} from 'react-icons/rx'
import { ButtonLink, Icon, Logout, MainMenu,MenuList,MenuListHolder, NavText } from "../Styles/SideBar.style";
export default function SideBar() {
  return (
    <div>
          <MainMenu >
            <MenuListHolder>
              <MenuList>
                <ButtonLink href="/dashboard">
                  <Icon>
                  <i class="fa fa-tachometer"></i>
                  </Icon>
                  <NavText>Dashboard</NavText>
                </ButtonLink>
              </MenuList>
              <MenuList>
                <ButtonLink href="/addProfile">
                  <Icon>
                  <i class="fa fa-plus "></i>
                  </Icon>
                  <NavText class="nav-text">Add Profile Data</NavText>
                </ButtonLink>
              </MenuList>
              <MenuList class="has-subnav">
                <ButtonLink href="/editProfile">
                 <Icon>
                 <i class="fa fa-edit"></i>
                 </Icon>
                  <NavText class="nav-text">Update Profile Data</NavText>
                </ButtonLink>
              </MenuList>
              {/* <li class="has-subnav">
                <a href="#">
                  <i class="fa fa-trash-o fa-2x"></i>
                  <NavText class="nav-text">Delete Profile Data</NavText>
                </a>
              </li> */}
              <MenuList class="has-subnav">
                <ButtonLink href="/editResume">
                <Icon>
                <i class="fa fa-file"></i>
                </Icon>
                  <NavText class="nav-text">Edit Resume</NavText>
                </ButtonLink>
              </MenuList>
            </MenuListHolder>
            <Logout class="logout">
              <MenuList>
                <ButtonLink href="/logout">
                  <Icon>
                  <i class="fa fa-power-off"></i>
                  </Icon>
                  <NavText class="nav-text">Logout</NavText>
                </ButtonLink>
              </MenuList>
            </Logout>
          </MainMenu>
    </div>
  );
}
