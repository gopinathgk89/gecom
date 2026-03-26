
import React, { useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
import Sidebar from "./sidebar"; 
import "bootstrap/dist/css/bootstrap.min.css";

const BannerUpdatePage = () => {
  const [files, setFiles] = useState({ 1: null, 2: null, 3: null });
  const [message, setMessage] = useState("");

  const onFileChange = (e, id) => {
    setFiles({ ...files, [id]: e.target.files[0] });
  };

  const updateImage = async (id) => {
    if (!files[id]) {
      alert("Please select a file first");
      return;
    }
    const formData = new FormData();
    formData.append("file", files[id]);

    try {
      await axios.post(
        `http://localhost:8013/api/banner/update/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setMessage(`Image ${id} updated successfully.`);
      setFiles({ ...files, [id]: null }); // Reset file input
      setFiles('')
    } catch (error) {
      console.error(error);
      setMessage(`Failed to update image ${id}`);
    }
  };

  return (
  	<>

<Navbar/>
<Sidebar/>
  	

    <div className="container mt-5" style={{width:'700px'}}>
      <h4>Update Banner Images</h4>
       {message && <div className="alert alert-info mt-3">{message}</div>}
      {[1, 2, 3].map((id) => (
        <div className="mb-4" key={id}>
          <label className="form-label">Upload Image {id}</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={(e) => onFileChange(e, id)}
          />
          <button
            className="btn btn-primary mt-2"
            onClick={() => updateImage(id)}
          >
            Update Image {id}
          </button>
        </div>
      ))}
     
    </div>
    </>
  );
};

export default BannerUpdatePage;
