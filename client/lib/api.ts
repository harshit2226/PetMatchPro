import axios from "axios";

const API = axios.create({
  baseURL: "https://petmatchpro.onrender.com/api",
});

export default API;