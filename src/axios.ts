import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_URL || "https://lotto-simulator.herokuapp.com/api",
});

export default instance;