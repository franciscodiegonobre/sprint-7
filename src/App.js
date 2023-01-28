import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    webPage: false,
    seoService: false,
    googleAds: false,
  });

  const [total, setTotal] = useState(0);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.checked,
      };
    });
    handleTotal(event);
  }

  function handleTotal(event) {
    if (event.target.name === "webPage" && event.target.checked) {
      setTotal((prevTotal) => prevTotal + 500);
    } else if (
      event.target.name === "webPage" &&
      event.target.checked === false
    ) {
      setTotal((prevTotal) => prevTotal - 500);
    }

    if (event.target.name === "seoService" && event.target.checked) {
      setTotal((prevTotal) => prevTotal + 300);
    } else if (
      event.target.name === "seoService" &&
      event.target.checked === false
    ) {
      setTotal((prevTotal) => prevTotal - 300);
    }

    if (event.target.name === "googleAds" && event.target.checked) {
      setTotal((prevTotal) => prevTotal + 200);
    } else if (
      event.target.name === "googleAds" &&
      event.target.checked === false
    ) {
      setTotal((prevTotal) => prevTotal - 200);
    }
  }

  return (
    <form>
      <p>¿Qué quieres hacer?</p>
      <input
        type="checkbox"
        id="webPage"
        checked={formData.webPage}
        onChange={handleChange}
        name="webPage"
      />
      <label htmlFor="webPage">Una pàgina web (500€)</label>
      <br />
      <input
        type="checkbox"
        id="seoService"
        checked={formData.seoService}
        onChange={handleChange}
        name="seoService"
      />
      <label htmlFor="webPage">Una consultoria SEO (300€)</label>
      <br />
      <input
        type="checkbox"
        id="googleAds"
        checked={formData.googleAds}
        onChange={handleChange}
        name="googleAds"
      />
      <label htmlFor="googleAds">Una campanya de Google Ads (200€)</label>
      <br />
      <p>Preu: {total}€</p>
    </form>
  );
}

export default App;
