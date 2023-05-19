import styled from "@emotion/styled";

export const MainMenu = styled.nav`
  background: #212121;
  border-right: 1px solid #e5e5e5;
  position: relative;
  top: 1rem;
  bottom: 5rem;
  height: 90vh;
  left: 0;
  /* width: 60px; */
  overflow-y: hidden;
  -webkit-transition: width 0.05s linear;
  transition: width 0.05s linear;
  -webkit-transform: translateZ(0) scale(1, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  z-index: 1000;
  &:hover {
    width: 250px;
    overflow: visible;
    color: #fff;
    background-color: #000000;
  }
 @media screen and (max-width:768px) {
    margin-left: 0px;
    width: 60px;
    overflow-x: hidden;
    /* height: 100vh; */
 }
`;
export const MenuListHolder = styled.ul`
  margin: 7px 0;
  outline: 0;
  margin: 0;
  padding: 0;
`;
export const MenuList = styled.li`
  position: relative;
  display: block;
  width: 250px;
  outline: 0;
  margin: 0;
  padding: 0;
  & > a {
    position: relative;
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    color: #999;
    font-family: arial;
    font-size: 14px;
    text-decoration: none;
    -webkit-transform: translateZ(0) scale(1, 1);
    -webkit-transition: all 0.1s linear;
    transition: all 0.1s linear;
  }
  &:hover {
    color: #000000;
    background-color: #fff;
  }
`;
export const Icon = styled.span`
  position: relative;
  display: table-cell;
  width: 60px;
  height: 36px;
  text-align: center;
  vertical-align: middle;
  font-size: 2em;
`;
export const NavText = styled.span`
  position: relative;
  display: table-cell;
  vertical-align: middle;
  width: 190px;
  font-family: "Titillium Web", sans-serif;
`;
export const Logout = styled.ul`
  position: absolute;
  left: 0;
  bottom: 0;
`;
export const ButtonLink = styled.a``;
