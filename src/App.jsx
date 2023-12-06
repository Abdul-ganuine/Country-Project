import React from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "./Pages/DetailsPage";
import { CountryProvider } from "./Context/CountryContext";

function App() {
  return (
    <CountryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:countryName" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </CountryProvider>
  );
}

export default App;

{
  /* <>
              <Homepage>
                <Navbar />
                <SearchArea
                  region={region}
                  setRegion={setRegion}
                  setCountries={setCountries}
                />
                <CountryList countries={countries} />
              </Homepage>
            </> */
}
// region={region}
// setRegion={setRegion}
// countries={countries}
// setCountries={setCountries}
