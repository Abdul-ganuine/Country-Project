import React, { useEffect, useState } from "react";
import styles from "./SearchArea.module.css";
import { useCountry } from "../Context/CountryContext";

function SearchArea() {
  const {
    region,
    setRegion,
    setCountries,
    getCountryBySearch,
    query,
    setQuery,
  } = useCountry();

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(
    function () {
      if (query.length === 0) {
        return;
      } else {
        getCountryBySearch();
      }
    },
    [query]
  );
  return (
    <div className={styles.container}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="🔍Search for a country..."
        />
        <select
          name=""
          id=""
          className={styles.select}
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
}

export default SearchArea;
