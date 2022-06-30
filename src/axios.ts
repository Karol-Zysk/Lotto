import axios from "axios";

const instance = axios.create({
  baseURL:  "https://lotto-simulator.herokuapp.com/api",
});

export default instance;