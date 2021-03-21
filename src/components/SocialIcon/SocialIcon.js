import React from "react";
import styles from "./SocialIcon.module.css";

const SocialIcon = ({ bgColor, icon }) => {
  return (
    <div className={styles.SocialIcon} style={{ backgroundColor: bgColor }}>
      {icon}
    </div>
  );
};

export default SocialIcon;
