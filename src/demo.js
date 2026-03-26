import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Upload the image
      const response = await axios.post('http://localhost:8013/api/images/upload', formData);
      const id = response.data;
      setImageId(id);
      setUploadedImageUrl(`http://localhost:8013/api/images/${id}`);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Image upload failed.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Upload Image</h2>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <button onClick={handleUpload}>Upload</button>

      {previewUrl && (
        <div style={{ marginTop: '20px' }}>
          <h3>Image Preview:</h3>
          <img src={previewUrl} alt="Preview" style={{ maxWidth: '300px' }} />
        </div>
      )}

      {uploadedImageUrl && (
        <div style={{ marginTop: '20px' }}>
          <h3>Uploaded Image from Server:</h3>
          <img src={uploadedImageUrl} alt="Uploaded" style={{ maxWidth: '300px' }} />
          <p>Image ID: {imageId}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
