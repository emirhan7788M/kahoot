import React, { useContext, useEffect, useState } from "react";
import App from "../App";
import "./signin.css";
import Mars from "../assets/icons/mars.png";
import { DataContext } from "../context/context";

export const SignIn = () => {
  const { signUser, setSignUser } = useContext(DataContext);
  const [user, setUser] = useState("");
  const handleChange = ({ target: { value } }) => {
    if (value.length > 5) {
      setUser(value);
    }
  };
  const handleClick = () => {
    setSignUser(user);
    localStorage.setItem("username", user);
  };
  useEffect(() => {
    setSignUser(localStorage.getItem("username"));
  });
  console.log(user);
  return (
    <div>
      {signUser ? (
        <App />
      ) : (
        <div className="wrapperSign">
          <div>
            <img src={Mars} alt="" />
          </div>
          <div className="ContainerSignIn">
            <input type="text" onChange={handleChange} placeholder="username" />{" "}
            <button onClick={handleClick}>sign in</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
