import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/e-clone-9e6d2/us-central1/api", //THE API (cloud function) URL
});
export default instance;
//http://localhost:5001/e-clone-9e6d2/us-central1/api
