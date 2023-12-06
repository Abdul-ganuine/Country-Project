import React from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "./Pages/DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:name" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
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
