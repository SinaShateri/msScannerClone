import React, { useState } from "react";
import classes from "./header.module.css";

const Header = () => {
  const [toggle, setToggle] = useState("");
  const toggleHandler = () => {
    toggle === "" ? setToggle("active") : setToggle("");
  };
  return (
    <header className={classes.mainHeader}>
      <ul>
        <li>
          <a href="#">صفحه اصلی</a>
        </li>
        <li>
          <a href="https://msscanner.uok.ac.ir/msscanner-uok-help.pdf">
            راهنما
          </a>
        </li>
        <li>
          <a href="http://cert.uok.ac.ir/">درباره ما</a>
        </li>
        <li>
          <a href="https://msscanner.uok.ac.ir/login">ثبت نام | ورود</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
