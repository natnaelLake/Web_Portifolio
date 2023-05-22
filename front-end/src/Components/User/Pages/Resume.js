import React from 'react'
import { ResumeButton } from '../Styles/Resume.styled'
export default function Resume() {
  return (
    <div>
      <ResumeButton $primary ><a href={`https://my-web-portifolio-back-end.onrender.com/Uploads/Bewuketu Lake Resume.pdf`} target="_blank" download style={{color:'white',textDecoration:'none'}}>View Resume</a></ResumeButton>
    </div>
  )
}
