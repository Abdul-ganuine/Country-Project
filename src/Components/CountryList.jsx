import React, { useContext, useEffect, useState } from "react";
import styles from "./CountryList.module.css";
import Country from "./Country";
import { useCountry } from "../Context/CountryContext";
import Loader from "./Loader";
function CountryList() {
  const { countries, isLoading } = useCountry();
  return (
    <div className={styles.container}>
      <ul className={styles.countryList}>
        {isLoading ? (
          <Loader />
        ) : (
          countries.map((country) => (
            <Country country={country} key={country.flags.png} />
          ))
        )}
      </ul>
    </div>
  );
}

export default CountryList;
