import { useState } from "react";
import Router from "next/router";
import axios from "axios";

const signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/signin",
        {
          email,
          password,
        }
      );
      // localStorage.setItem("userId", response.data.userId);
      // localStorage.setItem("jwt", response.data.jwt);
      Router.push("/");
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign In!</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
        />
      </div>
      {errors}
      <button onClick={onSubmit} className="btn btn-primary">
        Sign In
      </button>
    </form>
  );
};

export default signin;
