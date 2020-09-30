import Router from "next/router";
import axios from "axios";

export default async () => {
  try {
    await axios.post("http://localhost:4000/api/users/sigout");
    Router.push("/");
  } catch (error) {
    console.log(error);
  }
};
