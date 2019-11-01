import React from "react";

export default function Input(props) {
  const handleInputChange = event => {
    props.setUser(event.target.value);
  };
  return (
    <>
      <input
        placeholder="Type username..."
        onChange={handleInputChange}
        name="user"
        value={props.user}
      />
    </>
  );
}
