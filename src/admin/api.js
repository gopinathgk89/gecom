import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8013/api",
});

export default API; 