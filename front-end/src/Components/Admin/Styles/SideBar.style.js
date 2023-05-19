import styled from '@emotion/styled';


export const SideBar = styled.div`
    display: flex;
    flex-direction: row;
`
export const MainMenu = styled.nav`
background:#212121;
border-right:1px solid #e5e5e5;
position:absolute;
position:relative;
display:table-cell;
width:60px;
height:36px;
text-align:center;
vertical-align:middle;
font-size:18px;
top:0;
bottom:0;
height:100%;
left:0;
width:60px;
overflow:hidden;
-webkit-transition:width .05s linear;
transition:width .05s linear;
-webkit-transform:translateZ(0) scale(1,1);
z-index:1000;
ul {
    margin:7px 0;
}
li{
    position:relative;
display:block;
width:250px;
a {
    position:relative;
display:table;
border-collapse:collapse;
border-spacing:0;
color:#999;
 font-family: arial;
font-size: 14px;
text-decoration:none;
-webkit-transform:translateZ(0) scale(1,1);
-webkit-transition:all .1s linear;
transition:all .1s linear;
}
}
`
export const NavText = styled.span`
position:relative;
display:table-cell;
vertical-align:middle;
width:190px;
  font-family: 'Titillium Web', sans-serif;
`
export const Logout = styled.ul`
position:absolute;
left:0;
bottom:0;
`
export const AddButton = styled.button`

`
export const UpdateButton = styled.button`

`
export const DeleteButton = styled.button`
`
export const UploadButton = styled.button`

`
export const EditResumeButton = styled.button`

`