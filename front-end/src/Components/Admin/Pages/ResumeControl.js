import React from "react";
import './resume.css'
import { MuiFileInput } from 'mui-file-input'
import {Button} from '@mui/material'
export default function ResumeControl() {
  const [file, setFile] = React.useState(null)

  const handleChange = (newFile) => {
    setFile(newFile)
  }
  return (
    <div>
      <MuiFileInput value={file} onChange={handleChange} />
      <br />
      <br />
      <br />
      
      <Button variant = 'contained'>Change</Button>
      <br />
      <br />
      <br />
      <Button variant = 'contained'>Delete</Button>
    </div>
  );
}
