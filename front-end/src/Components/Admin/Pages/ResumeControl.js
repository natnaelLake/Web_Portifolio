import React from "react";
import { MuiFileInput } from "mui-file-input";
import { Resume, UploadButton } from "../Styles/DisplayScreen";
export default function ResumeControl() {
  const [file, setFile] = React.useState(null);

  const handleChange = (newFile) => {
    setFile(newFile);
  };
  return (
    <Resume>
      <MuiFileInput value={file} onChange={handleChange} />
      <br />
      <br />
      <br />

      <UploadButton >Change</UploadButton>
      <br />
      <br />
      <br />
      <UploadButton $delete>Delete</UploadButton>
    </Resume>
  );
}
