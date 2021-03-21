import React from "react";
import styles from "./Layout.module.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Content from "./Content/Content";
import Modal from "../Modal/Modal";

const Layout = ({ children }) => {
  return (
    <div className="position-relative" style={{ overflowY: "hidden" }}>
      <Modal />
      <div className={styles.LayoutTop}>
        <Header />
      </div>
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
