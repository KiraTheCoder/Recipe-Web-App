import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { fetchData, fetchTabData } from "../service";

const RecipeLists = ({ setLoader }) => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [query, setQuery] = useState("pasta");
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData(query).then((response) => {
      setData(response);
      setLoader(false);
    });
  }, []);



  const searchRecipe = () =>
    fetchData(searchedTerm).then((response) => {
      setData(response);
      setLoader(false);
    });

  return (
    <div className="container">
      <div className="heading-line">
        <strong>Search Recipes</strong>
        <div className="input-wrapper">
          <input
            type="text"
            onChange={(e) => setSearchedTerm(e.target.value)}
            value={searchedTerm}
            placeholder="Search your recipe"
          />
          <button onClick={() => (searchRecipe(),setLoader(true))}>
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="flexbox">
        {data &&
          data.hits.map((item, index) => (
            <div key={index} className="flexItem">
              <div className="img-wrapper">
                <img src={item.recipe.image} alt={item.recipe.label} />
              </div>
              <p>{item.recipe.label}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecipeLists;
