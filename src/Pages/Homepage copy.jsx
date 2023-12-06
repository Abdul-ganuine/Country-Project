import React, { useContext } from "react";
import styles from "./Homepage.module.css";
import CountryList from "../Components/CountryList";
import Navbar from "../Components/Navbar";
import SearchArea from "../Components/SearchArea";
import { useEffect, useState } from "react";
import { useCountry } from "../Context/CountryContext";

function Homepage() {
  const [region, setRegion] = useState("All");
  const [countries, setCountries] = useState([]);

  const { something } = useCountry();
  console.log(something);
  async function getCounties() {
    const request = await fetch("https://restcountries.com/v3.1/all");
    const data = await request.json();
    setCountries(data);
  }

  async function getCountryByRegion() {
    const request = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const data = await request.json();
    setCountries(data);
  }
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
      <SearchArea
        region={region}
        setCountries={setCountries}
        setRegion={setRegion}
      />
      <CountryList countries={countries} />
    </main>
  );
}

export default Homepage;
