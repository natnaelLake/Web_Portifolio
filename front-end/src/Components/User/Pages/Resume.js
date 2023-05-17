import React from 'react'
import { ResumeButton } from '../Styles/Resume.styled'
import docFile from '../../../assets/photo_2023-04-26_19-15-45.jpg'
// import { Link } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Resume() {
  return (
    // <Link to={`http://localhost:5500/uploads/frame.png`} target="_blank" download style={{color:'white',textDecoration:'none'}}>View File</Link>
    <div>
      <ResumeButton $primary ><a href={`http://localhost:5500/uploads/frame.png`} target="_blank" download style={{color:'white',textDecoration:'none'}}>View File</a></ResumeButton>
      {/* <Link to = '/data'>Link</Link> */}
    </div>

    // <ResumeButton $primary><Link to = '/black' target='_black' download />Primary</ResumeButton>
  )
}
