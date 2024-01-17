import React, { useState, useRef } from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const Widget = ({ handleImageSelect }) => {
  const [url, setUrl] = useState("");
  const fileInputRef = useRef(null);

  const handleImageInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImage(file);
    }
  };

  const uploadImage = (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload_event");
    data.append("cloud_name", "eventCollector");

    fetch("https://api.cloudinary.com/v1_1/eventCollector/image/upload", {
      method: "post",
      body: data
    })
    .then(resp => resp.json())
    .then(data => {
      handleImageSelect(data.url);
      setUrl(data.url);
    })
    .catch(err => console.log(err));
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <Card color="transparent" shadow={false}>
        <div className="p-4">

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageInputChange}
            className="hidden"
          />
        <Button
          onClick={handleUploadButtonClick}
          variant="text"
          className="flex items-center justify-center gap-3 bg-green-500 w-full" 
        >
          <span className="material-icons">image</span>
          Upload Picture
        </Button>
        </div>
     https://dashboard.render.com/web/srv-cmja6c8l5elc73eq8ue0/shell </Card>
      {url && (
        <div className="mt-4">
          <img src={url} alt="Uploaded" className="w-full h-auto" />
        </div>
      )}
    </div>
  );
};

export default Widget;
