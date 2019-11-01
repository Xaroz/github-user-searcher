import React from "react";
import Input from "./Input";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <h1>GitHub User Searcher</h1>
        <img
          className="git-image"
          src="https://image.flaticon.com/icons/svg/25/25231.svg"
          alt="github icon"
        />
      </div>
      <div>
        <Input />
      </div>
    </div>
  );
}

export default App;
