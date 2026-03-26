import React, { useEffect, useState,useRef } from 'react';
import axios from 'axios';
import Navbar from "./navbar";
import Sidebar from "./sidebar"; 
import "bootstrap/dist/css/bootstrap.min.css";

function Homesetting() {

   const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

    const [text, setText] = useState('');

  // ✅ Ref for resetting the file input
  const fileInputRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:8013/api/settings')
      .then(res => {
        const data = res.data;
        setAddress(data.address || '');
        setEmail(data.email || '');
        setMobile(data.mobile || '');
        // Fetch logo as base64 for preview
        axios.get('http://localhost:8013/api/settings/logo', { responseType: 'blob' })
          .then(response => {
            if (response.data.size > 0) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setLogoPreview(reader.result);
              };
              reader.readAsDataURL(response.data);
            }
          })
          .catch(() => {
            setLogoPreview('');
          });
      })
      .catch(err => console.error(err));
  }, []);

  const handleFileChange = e => {
    const file = e.target.files[0];
    setLogoFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setLogoPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('address', address);
    formData.append('email', email);
    formData.append('mobile', mobile);
    if (logoFile) {
      formData.append('logoFile', logoFile);
    }

    axios.post('http://localhost:8013/api/settings', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(() => {
        setMessage('✅ Settings updated successfully.');

        // ✅ Clear all form fields
        setAddress('');
        setEmail('');
        setMobile('');
        setLogoFile(null);
        setLogoPreview('');

        // ✅ Clear file input box
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      })
      .catch(() => setMessage('❌ Error updating settings.'));
  };

 

   const handleUpdate = async () => {
    if (text.trim() === '') return;
    try {
      await axios.post('http://localhost:8013/api/marquee/update', { content: text });
      setText('');
      
    } catch (error) {
      console.error("Error updating marquee text", error);
    }
  };

  return (
    <>
    <Navbar/>
    <Sidebar/>
    <h4 style={{marginLeft:'260px',marginTop:'20px'}}>Home Setting</h4>
       <div className="container mt-5" style={{marginLeft:'260px',marginTop:'60px'}}>
      <h5>Enter  Your  Marquee </h5>
      <div className="mb-3">
        <input
          type="text"
          className="form-control w-50" 
          placeholder="Enter something..."
           value={text}
             onChange={(e) => setText(e.target.value)}
           
        />
      </div>
      <button className="btn btn-primary" onClick={handleUpdate} >
        Update
      </button>
      </div>

    <div className="card shadow-sm" style={{width:'900px',marginLeft:'260px',marginTop:'60px'}}>


      <div className="card-body">
        {message && (
          <div className={`alert ${message.startsWith('✅') ? 'alert-success' : 'alert-danger'}`} role="alert">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-3">
            <label className="form-label">Logo Image</label>
            <input type="file" className="form-control" accept="image/*" onChange={handleFileChange} />
          </div>

          {logoPreview && (
            <div className="mb-3">
              <label className="form-label">Logo Preview:</label><br />
              <img src={logoPreview} alt="Logo Preview" style={{ height: '80px' }} />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              className="form-control"
              type="text"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input
              className="form-control"
              type="text"
              value={mobile}
              onChange={e => setMobile(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">Save Settings</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Homesetting;
