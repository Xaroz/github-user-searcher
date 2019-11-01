import React, { useState } from "react";
import Input from "./Input";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [user, setUser] = useState("");
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
        <Input setUser={setUser} user={user} />
      </div>
      <div>
        <Link
          to={{
            pathname: `/${user}`
          }}
        >
          <button> Search</button>
        </Link>
      </div>
    </div>
  );
};
