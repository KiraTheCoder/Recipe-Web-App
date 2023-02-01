import React, { useState, useEffect } from "react";
import { CiPizza } from "react-icons/ci";
import { GiNoodles, GiFruitBowl, GiCheckMark } from "react-icons/gi";
import { MdOutlineIcecream } from "react-icons/md";
import { fetchTabData } from "../service";

const Tabs = (props) => {
  const [active, setActive] = useState("pizza");
  const [tabData, setTabData] = useState("");
  const [tabLabel, setTabLabel] = useState([
    {
      name: "pizza",
      icon: <CiPizza />,
      id: "687b61a316de39be04b86911cff4dfe6",
    },
    {
      name: "Noodles",
      icon: <GiNoodles />,
      id: "e0f06a8d4769e6a9344ff766d04a206f",
    },
    {
      name: "Desert",
      icon: <GiFruitBowl />,
      id: "9bb6d02a2e670c8f930627e11df85f5a",
    },
    {
      name: "Ice Cream",
      icon: <MdOutlineIcecream />,
      id: "2283c0cc62744caa729a678f4080bd42",
    },
  ]);

  const handleClick = (name, id) => {
    setActive(name);
    fetchTabData(id).then((response) => {
      setTabData(response);
      props.setLoader(false)
    });
  };

  useEffect(() => {
    fetchTabData(tabLabel[0].id).then((response) => {
      setTabData(response);
      props.setLoader(false);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="recipeHeading">What would you like to have!</h1>
      <div className="tabs">
        {tabLabel.map((item, index) => (
          <div
            key={index}
            onClick={() => (
              handleClick(item.name, item.id), props.setLoader(true)
            )}
            className={`tablist ${active === item.name ? "active" : ""}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="recipe_banner">
        {tabData !== "" && (
          <>
            <div className="left-col">
              <span className="badge">
                {tabData.recipe.cuisineType[0].toUpperCase()}
              </span>
              <h1>{tabData.recipe.label}</h1>
              <p>
                <strong>Recipe by : </strong>
                <small>{tabData.recipe.source}</small>
              </p>
              <h3>Ingredients</h3>
              <div className="ingredients">
                <ul>
                  {tabData.recipe.ingredientLines.map((list, index) => (
                    <li key={index}>
                      <GiCheckMark size="18px" color="#6fcb9f" />
                      &nbsp;<span>{list}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            -
            <div className="right-col">
              <div className="image-wrapper">
                <img src={tabData.recipe.image} alt="" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;
