import React, { useContext } from "react";
import styles from "./Homepage.module.css";
import CountryList from "../Components/CountryList";
import Navbar from "../Components/Navbar";
import SearchArea from "../Components/SearchArea";
import { useEffect, useState } from "react";
import { useCountry } from "../Context/CountryContext";

function Homepage() {
  const {
    region,
    setRegion,
    getCounties,
    getCountryByRegion,
    setCountries,
    countries,
    isLoading,
    setIsLoading,
  } = useCountry();
  useEffect(
    function () {
      try {
        if (region === "All") {
          getCounties();
        } else {
          getCountryByRegion();
        }
      } catch (error) {
        console.log(error);
      }
    },
    [region]
  );
  return (
    <main className={styles.main}>
      <Navbar />
      <SearchArea />
      <CountryList />
    </main>
  );
}

export default Homepage;
