import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Hpme() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [url, seturl] = useState(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  );
  const input = useRef();
  useEffect(() => {
    setloading(true);
    axios
      .get(url)
      .then((res) => setdata(res.data?.drinks))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  }, [url]);
  const hendlsubmit = (e) => {
    e.preventDefault();
    seturl(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
        input.current.value
    );
  };
  return (
    <>
      <section className="section search">
        <form className="search-form" onSubmit={hendlsubmit}>
          <div className="form-control">
            <label htmlFor="input">search your favorite cocktail</label>
            <input
              onChange={() =>
                seturl(
                  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
                    input.current.value
                )
              }
              ref={input}
              type="text"
              name="name"
              id="input"
            />
          </div>
        </form>
      </section>
      <section className="section">
        {data ? (
          <>
            <h2 className="section-title">Cocktails</h2>
            <div className="cocktails-center">
              {data
                ? data.map(
                    ({
                      idDrink,
                      strDrinkThumb,
                      strDrink,
                      strGlass,
                      strAlcoholic,
                    }) => {
                      return (
                        <article key={idDrink} className="cocktail">
                          <div className="img-container">
                            <img src={strDrinkThumb} alt={strDrink} />
                          </div>
                          <div className="cocktail-footer">
                            <h3>{strDrink}</h3>
                            <h4>{strGlass}</h4>
                            <p>{strAlcoholic}</p>
                            <Link
                              className="btn btn-primary btn-details"
                              to={`/detalis/${idDrink}`}
                            >
                              details
                            </Link>
                          </div>
                        </article>
                      );
                    }
                  )
                : ""}
            </div>
          </>
        ) : (
          <h2 className="ki">"No Cocktails Matched Your Search Criteria"</h2>
        )}
        {loading && <div className="loader "></div>}
      </section>
    </>
  );
}

export default Hpme;
