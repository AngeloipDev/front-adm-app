import React from "react";
import style from "../styles/Header.module.css";

export const Header = ({ title = "Title" }) => {
  return (
    <div className={style.headerContainer}>
      <div>{title}</div>
      <div></div>
    </div>
  );
};
