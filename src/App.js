import "./App.scss";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import RecipeLists from "./components/RecipeLists";
import React, { useState } from "react";

function App() {
  const [loader, setLoader] = useState(true);

  return (
    <div className="main">
      <Header />
      <Tabs setLoader={setLoader}/>
      <RecipeLists setLoader={setLoader} />
      {loader && (
        <div className="loader">
          <div className="spiner"></div>
        </div>
      )}
    </div>
  );
}

export default App;


// .env data
// REACT_APP_APP_ID = 37caca59
// REACT_APP_APP_KEY = cd88311abf98e1da20790e8806fbd1c7