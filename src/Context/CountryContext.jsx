import { useState } from "react";
import { createContext, useContext } from "react";

const CountryContext = createContext();

function CountryProvider({ children }) {
  const [region, setRegion] = useState("All");
  const [countries, setCountries] = useState([]);
  const [details, setDetails] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const [query, setQuery] = useState("");

  async function getCounties() {
    setIsloading(true);
    const request = await fetch("https://restcountries.com/v3.1/all");
    const data = await request.json();
    setCountries(data);
    setIsloading(false);
  }

  async function getCountryByRegion() {
    setIsloading(true);
    const request = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const data = await request.json();
    setCountries(data);
    setIsloading(false);
  }

  async function getCountryByName(name) {
    setIsloading(true);
    const request = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await request.json();
    setDetails(data);
    setIsloading(false);
  }

  async function getCountryBySearch() {
    setIsloading(true);
    const request = await fetch(`https://restcountries.com/v3.1/name/${query}`);
    const data = await request.json();
    setCountries(data);
    setIsloading(false);
  }

  return (
    <CountryContext.Provider
      value={{
        region,
        setRegion,
        getCounties,
        getCountryByRegion,
        countries,
        setCountries,
        details,
        getCountryByName,
        isLoading,
        setIsloading,
        getCountryBySearch,
        query,
        setQuery,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

function useCountry() {
  const context = useContext(CountryContext);
  return context;
}
export { CountryProvider, useCountry };
