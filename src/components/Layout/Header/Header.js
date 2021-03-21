import React from "react";
import { ReactComponent as Logo } from "../../../images/logo.svg";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import LoginButton from "../../Buttons/LoginButton";

const Header = () => {
  return (
    <div className="container py-3 d-flex align-items-center">
      <Logo />
      <Link to="/" className={`${styles.HeaderLink} ml-3`}>
        Posts
      </Link>
      <div className="ml-auto">
        <LoginButton />
      </div>
    </div>
  );
};

export default Header;
