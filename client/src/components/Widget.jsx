import React, { useEffect, useRef } from 'react';

const Widget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'eventcollector',
      uploadPreset: 'upload_event',
      cropping: true
    }, function(error, result) {
      console.log(result);
    });

  }, []);

  return (
    <div>
      <button onClick={() => widgetRef.current.open()}>
        Upload
      </button>
    </div>
  );
};
  export default Widget;