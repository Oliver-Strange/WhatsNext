import axios from "axios";

const buildClient = ({ req }) => {
  return axios.create({
    baseURL: "http://localhost:4000",
    // headers: req.headers,
  });
};

export default buildClient;
