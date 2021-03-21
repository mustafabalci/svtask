import React from "react";
import styles from "./Buttons.module.css";

const Button = ({ type, text, ...rest }) => {
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
        bgColor = "#11CDEF";
        break;
    }

    return bgColor;
  };

  return (
    <div
      className={styles.Buttons}
      style={{ backgroundColor: getBgColor() }}
      {...rest}
    >
      {text}
    </div>
  );
};

export default Button;
