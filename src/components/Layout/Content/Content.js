import React from "react";
import styles from "./Content.module.css";

const Content = ({ children }) => {
  return (
    <main className={styles.ContentWrapper}>
      <div className={`${styles.Content} container py-2`}>{children}</div>
    </main>
  );
};

export default Content;
