import styled from "@emotion/styled";

export const NavContianer = styled.div`
  width: 100%;
  margin: 0;
`;
export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
export const NavBar = styled.ul`
  z-index: 1000;
  width: 95vw;
  border-radius: 25px;
  height: fit-content;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  /* align-items: center; */
  /* padding: 0 10px; */
  margin: 0 0;
  margin-top: 1% !important;
  justify-content: space-between;
`;
export const Text = styled.p`
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  padding: 12px 16px;
`
export const Navs = styled.li`
  list-style: none;
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  padding: 0px 20px;
  padding-bottom: 0px;
  padding-top: 17px;
  justify-content: center;
  margin-top: 15px;
  margin-right: 20px;
  /* margin: 0 8px; */
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: 0.2s;
    border-radius: 25px;
  }
  &:hover {
    color: black;
  }
  &:hover::before {
    background: linear-gradient(to bottom, #e8edec, #d2d1d3);
    box-shadow: 0px 3px 20px 0px black;
    transform: scale(1.2);
  }
`;
