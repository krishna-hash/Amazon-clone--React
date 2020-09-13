import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

import { auth } from "./Firebase";


function Login() {
 
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpasword] = useState("");
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className=" login__logo"
          src="https://2.bp.blogspot.com/-Y14x8SbZh8A/UhFK00uF7mI/AAAAAAAAAjQ/NNFfn5NSzgM/s1600/Logo+Amazon.JPG"
          alt="amazon"
        ></img>
      </Link>
      <div className="container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            type="text"
            onChange={(e) => setemail(e.target.value)}
            autoComplete="off"
          ></input>
          <h5>password</h5>
          <input
            value={password}
            type="password"
            onChange={(e) => setpasword(e.target.value)}
            autoComplete="off"
          ></input>
          <button onClick={login} type="submit" className="register">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="create">
          create an amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
