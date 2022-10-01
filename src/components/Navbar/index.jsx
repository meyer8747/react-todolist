import React from "react";

import styles from "./styles.module.css";

// import for react-router
import { NavLink } from "react-router-dom";

// import of react-icons
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <h1>To-Do List</h1>
      <NavLink to={"/profile"}>
        <BiUserCircle />
      </NavLink>
    </div>
  );
};

export default Navbar;
