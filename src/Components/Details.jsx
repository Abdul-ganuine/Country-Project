import React from "react";
import styles from "./Details.module.css";
import { useNavigate } from "react-router-dom";

function Details({ detail }) {
  const navigate = useNavigate();
  function handleBackClick() {
    navigate(-1);
  }
  return (
    <div className={styles.container}>
      <button className={styles.btnBack} onClick={handleBackClick}>
        &larr; back
      </button>
      <div className={styles.detailsContainer}>
        <div className={styles.row}>
          <div className={`${styles.flagBox} ${styles.mainBox}`}>
            <img src={detail.flags.png} alt="" className={styles.img} />
          </div>
          <div className={`${styles.detailsBox} ${styles.mainBox}`}>
            <h3 className={styles.name}>{detail.name.common}</h3>
            <div className={styles.infoContainer}>
              <div className={styles.box}>
                <p>
                  Native Name:{" "}
                  <span className={styles.value}>{detail.name.common}</span>
                </p>
                <p>
                  Population:{" "}
                  <span className={styles.value}>{detail.population}</span>
                </p>
                <p>
                  Region: <span className={styles.value}>{detail.region}</span>
                </p>
                <p>
                  Sub Region:{" "}
                  <span className={styles.value}>{detail.subregion}</span>{" "}
                </p>
                <p>
                  Capital:{" "}
                  <span className={styles.value}>{detail.capital}</span>{" "}
                </p>
              </div>
              <div className={styles.box}>
                <p>
                  Top Level Domain:
                  <span className={styles.value}>{detail.tld}</span>
                </p>
                <p>
                  Currencies:
                  <span className={styles.value}></span>
                </p>
                <p>
                  Language:
                  <span className={styles.value}>{detail.languages.eng}</span>
                </p>
              </div>
            </div>
            <div className={styles.moreInfo}>
              {detail.borders ? <p>Border Countries:</p> : ""}
              <ul>
                {detail.borders
                  ? detail.borders.map((border, i) => <li key={i}>{border}</li>)
                  : ""}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
