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
