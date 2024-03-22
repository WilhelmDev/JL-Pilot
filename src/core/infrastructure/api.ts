import axios from "axios";

function createInstance() {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 1000,
  });
}


export default createInstance();