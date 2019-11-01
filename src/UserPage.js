import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserPage(props) {
  const username = props.match.params.user;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${username}`);
        setLoading(false);
        setData(res.data);
      } catch (err) {
        setLoading(false);
        setHasError(err);
      }
    };
    fetchData();
  }, [username]);

  return loading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : hasError ? (
    <div>
      <h1>User Not Found</h1>
    </div>
  ) : (
    <div>
      <h1>
        {data.name} ({username})
      </h1>
      {/* relevant information to add: 
        name:
        username
        avatar_url
        bio
        followers
        following
        url
        public_repos */}
      <img className="user-img" src={data.avatar_url} alt="user" />
    </div>
  );
}
