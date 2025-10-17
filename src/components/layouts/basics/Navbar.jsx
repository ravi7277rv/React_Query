import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        background: "#3a3a3a",
      }}
    >
      <Link
        style={{
          margin: "5px",
          textDecoration: "none",
          background: "#6d6d6d",
          padding: "8px 12px",
          color: "white",
          borderRadius: "8px",
        }}
        to="/"
      >
        Home
      </Link>
      <Link
        style={{
          margin: "5px",
          textDecoration: "none",
          background: "#6d6d6d",
          padding: "8px 12px",
          color: "white",
          borderRadius: "8px",
        }}
        to="/heros"
      >
        Heros
      </Link>
      <Link
        style={{
          margin: "5px",
          textDecoration: "none",
          background: "#6d6d6d",
          padding: "8px 12px",
          color: "white",
          borderRadius: "8px",
        }}
        to="/rqheros"
      >
        RQHeros
      </Link>
      <Link
        style={{
          margin: "5px",
          textDecoration: "none",
          background: "#6d6d6d",
          padding: "8px 12px",
          color: "white",
          borderRadius: "8px",
        }}
        to="/reacthookform"
      >
        ReactHookForm
      </Link>
      <Link
        style={{
          margin: "5px",
          textDecoration: "none",
          background: "#6d6d6d",
          padding: "8px 12px",
          color: "white",
          borderRadius: "8px",
        }}
        to="/debounce"
      >
        Debouncing
      </Link>
      <Link
        style={{
          margin: "5px",
          textDecoration: "none",
          background: "#6d6d6d",
          padding: "8px 12px",
          color: "white",
          borderRadius: "8px",
        }}
        to="/hooks"
      >
        Hooks
      </Link>
    </nav>
  );
};

export default Navbar;
