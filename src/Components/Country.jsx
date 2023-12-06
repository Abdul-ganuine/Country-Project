import React from "react";
import styles from "./Country.module.css";
import { Link } from "react-router-dom";

function Country({ country }) {
  return (
    <li className={styles.country}>
      <Link to={`${country.name.common}`}>
        <div className={`${styles.imgBox} ${styles.box}`}>
          <img src={country.flags.png} alt="" className={styles.img} />
        </div>
        <div className={`${styles.info} ${styles.box}`}>
          <h3>{country.name.common}</h3>
          <div className={styles.details}>
            <p>
              Population:{" "}
              <span className={styles.detailsInfo}>{country.population}</span>
            </p>
            <p>
              Region:{" "}
              <span className={styles.detailsInfo}>{country.region}</span>
            </p>
            <p>
              Capital:{" "}
              <span className={styles.detailsInfo}>{country.capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Country;
