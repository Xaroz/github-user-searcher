import React from "react";

export default function UserPage(props) {
  const username = props.match.params.user;

  return (
    <div>
      <h1>{username}</h1>
    </div>
  );
}
