import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h3 className="title">Welcome</h3>
      <br />
      <span className="email">Email:</span>
      <br />
      <input
        className="input1"
        type="email"
        name="email"
        value=""
        placeholder="type your email"
      />
      <br />
      <span className="password">Password:</span>
      <br />
      <input
        className="input2"
        type="password"
        name="password"
        value=""
        placeholder="type your password"
      />
      <br />
      <button className="btn" type="submit">
        Login
      </button>
    </div>
  );
}
