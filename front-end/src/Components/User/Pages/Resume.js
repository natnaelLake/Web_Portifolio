import React from 'react'
import {Link} from 'react-router-dom'
import { ResumeButton } from '../Styles/Resume.styled'
import docFile from '../../../assets/photo_2023-04-26_19-15-45.jpg'
export default function Resume() {
  return (
    // <Link to={`http://localhost:5500/uploads/frame.png`} target="_blank" download style={{color:'white',textDecoration:'none'}}>View File</Link>
    <ResumeButton>Button</ResumeButton>

    // <ResumeButton $primary><Link to = '/black' target='_black' download />Primary</ResumeButton>
  )
}
