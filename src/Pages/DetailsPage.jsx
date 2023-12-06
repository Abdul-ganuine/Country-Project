import React, { useEffect, useState } from "react";
import styles from "./DetailsPage.module.css";
import Navbar from "../Components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useCountry } from "../Context/CountryContext";
import Loader from "../Components/Loader";
import Details from "../Components/Details";

function DetailsPage() {
  const { isLoading } = useCountry();
  const { countryName } = useParams();
  const { getCountryByName, details } = useCountry();

  useEffect(
    function () {
      getCountryByName(countryName);
    },
    [countryName]
  );
  return (
    <main className={styles.main}>
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        details.map((detail, i) => <Details key={i} detail={detail} />)
      )}
    </main>
  );
}

export default DetailsPage;
