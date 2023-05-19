import React from 'react'
import { ResumeButton } from '../Styles/Resume.styled'
export default function Resume() {
  return (
    <div>
      <ResumeButton $primary ><a href={`http://localhost:5500/Uploads/Bewuketu Lake Resume.pdf`} target="_blank" download style={{color:'white',textDecoration:'none'}}>View Resume</a></ResumeButton>
    </div>
  )
}
