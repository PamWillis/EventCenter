import React, { useState } from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const Widget = ({ handleImageSelect }) => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = () => {
    const data = new FormData()

    data.append("file", image)
    data.append("upload_preset", "upload_event")
    data.append("cloud_name", "eventCollector")
    fetch("  https://api.cloudinary.com/v1_1/eventCollector/image/upload", {
      method: "post",
      body: data
    })

      .then(resp => resp.json())
      .then(data => {
        handleImageSelect(data.url)
        setUrl(data.url)
      })

      .catch(err => console.log(err))
  }

  const [formState, setFormState] = useState({ image: '' });

  const PullData = () => {
    let Url = image;
    return (
      <Input
        value={formState.image}
        onChange={handleImageSelect}
      />
    );
  };

  return (
    <div>
      <Card color="filled" shadow={true}>
        <div className="p-4">
          <Typography variant="h3" color="blue-gray" className="mb-4 text-md">
            Upload your picture to use on the event page
          </Typography><div />
          <div className="file-input-container justify center">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              id="file-input"
              className="hidden" // Hide the default file input
            />
            <label htmlFor="file-input" className="custom-file-input">
              CHOOSE FILE FROM YOUR DEVICE
            </label>
          </div>
          <div></div>
          
          <Button
            onClick={uploadImage}
            variant="transparent"
            className="flex items-center justify center gap-3 bg-green-500">
            Upload Picture
          </Button>
        </div>
      </Card>
      <div className="mt-4">
      </div>
    </div>
  );
};
export default Widget;