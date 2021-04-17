import { useState } from 'react';
import '../styles/globals.css';
import { AdoptionContext } from "../context/AdoptionContext";

function MyApp({ Component, pageProps }) {
  const [adoptions, setAdoptions] = useState([]);

  return (
    <AdoptionContext.Provider value={{ adoptions, setAdoptions }}>
      <Component {...pageProps} />
    </AdoptionContext.Provider>
  );
}

export default MyApp
