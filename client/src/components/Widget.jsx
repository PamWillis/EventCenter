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
          </Typography>
          <Input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="border border-gray-300 p-2 w-full"
          />
          <Button
            onClick={uploadImage}

            className="mt-4 bg-green-500 text-white"
          >
            Upload
          </Button>
        </div>
      </Card>
      <div className="mt-4">
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Uploaded image will be displayed here
        </Typography>
        <img src={url} alt="Uploaded" className="mb-2" />
        {url && (
          <Typography variant="body2" color="blue-gray">
            Image URL: {url}
          </Typography>
        )}
      </div>
    </div>
  );
};
export default Widget;