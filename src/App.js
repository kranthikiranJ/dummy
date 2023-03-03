import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { username, email, password, confirmpassword } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://kranthikiran-91ad1-default-rtdb.firebaseio.com/register.json",
        data
      )
      .then(() => alert("Submitted Successfully"));
  };

  return (
    <div>
      <center>
        <form autoComplete="off" onSubmit={submitForm}>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="username"
            onChange={changeHandler}
          />
          <br />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            placeholder="confirmpassword"
            onChange={changeHandler}
          />
          <br />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
};

export default App;
