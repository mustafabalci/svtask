import React from "react";
import styles from "./Buttons.module.css";

const Button = ({ type, text }) => {
  const getBgColor = () => {
    let bgColor;

    switch (type) {
      case "warn":
        bgColor = "#FB6340";
        break;
      case "success":
        bgColor = "#2DCE89";
        break;
      case "info":
        bgColor = "#5E72E4";
        break;
      default:
        bgColor = "#FFFFFF";
        break;
    }

    return bgColor;
  };

  return (
    <div className={styles.Buttons} style={{ backgroundColor: getBgColor() }}>
      {text}
    </div>
  );
};

export default Button;
