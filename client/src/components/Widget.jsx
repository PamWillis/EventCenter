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
      <Card color="transparent" shadow={true}>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
            Upload Picture
          </Button>
        </div>
      </Card>
      <div className="mt-4">
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Uploaded image will be displayed here
        </Typography>
        <img src={url} alt="Uploaded" className="mb-2" />
        {url && (
          <Typography variant="h3" color="blue-gray">
            Image URL: {url}
          </Typography>
        )}
      </div>
    </div>
  );
};
export default Widget;