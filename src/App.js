import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    webPage: false,
    seoService: false,
    googleAds: false,
    pageNumber: 0,
    pageLanguages: 0,
  });

  const [total, setTotal] = useState(0);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
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
      {formData.webPage && (
        <div className="webPageExtras">
          <label htmlFor="pageNumber">Número de páginas</label>
          <input
            type="number"
            id="pageNumber"
            placeholder="0"
            onInput={handleChange}
            name="pageNumber"
            value={formData.pageNumber}
          />
          <br />
          <label htmlFor="pageLanguages">Número de idiomas</label>
          <input
            type="number"
            id="pageLanguages"
            placeholder="0"
            onInput={handleChange}
            name="pageLanguages"
            value={formData.pageLanguages}
          />
        </div>
      )}

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
      <p>
        Preu:{" "}
        {total > 0 && formData.webPage === true
          ? total + formData.pageNumber * formData.pageLanguages * 30
          : total}
        €
      </p>
    </form>
  );
}

export default App;
