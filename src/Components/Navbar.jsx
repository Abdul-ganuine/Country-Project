import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Where in the world</h1>
      </div>
    </nav>
  );
}

export default Navbar;
