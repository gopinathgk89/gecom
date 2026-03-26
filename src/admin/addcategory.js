 
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from "./navbar.js";
import Sidebar from "./sidebar.js";
import axios from "axios";
import React, { useState, useEffect } from "react";



function CategoryManager() {
   const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);

  const API_URL = "http://localhost:8013/api/categories";

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await axios.get(API_URL);
    setCategories(res.data);
  };

  const addCategory = async () => {
    if (!categoryName.trim()) return;

    const res = await axios.post(API_URL, { name: categoryName });
    setCategories([...categories, res.data]);
    setCategoryName("");
  };

  const deleteCategory = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setCategories(categories.filter((cat) => cat.id !== id));
  };


  return (
    <>

    <AdminNavbar/>
    <Sidebar/>
    <div className="container mt-5" style={{marginLeft:'290px'}}>
      <h3>Add Category</h3>
      <div className="input-group mb-3 w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Enter category"
          value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
        />
        <button
          className="btn btn-primary"
           onClick={addCategory}
        >
          Add
        </button>
      </div>

      <ul className="list-group w-50">
           {categories.map((cat) => (
          <li key={cat.id} className="list-group-item d-flex justify-content-between align-items-center">
                 {cat.name}{" "}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteCategory(cat.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default CategoryManager;
