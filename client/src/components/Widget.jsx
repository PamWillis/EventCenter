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
      <Card color="filled" shadow={true}>
        <div className="p-4">
          <Typography variant="h3" color="blue-gray" className="mb-4 text-md">
            Upload your picture to use on the event page
          </Typography>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageInputChange}
            className="hidden"
          />
          <Button
            onClick={handleUploadButtonClick}
            variant="transparent"
            className="flex items-center justify-center gap-3 bg-green-500"
          >
            Upload Picture
          </Button>
        </div>
      </Card>
      {url && (
        <div className="mt-4">
          <img src={url} alt="Uploaded" className="w-full h-auto" />
        </div>
      )}
    </div>
  );
};

export default Widget;
