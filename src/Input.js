import React, { useState } from "react";

export default function Input(props) {
  const [user, setUser] = useState("");

  const handleInputChange = event => {
    setUser(event.target.value);
  };
  return (
    <>
      <input
        placeholder="Type username..."
        onChange={handleInputChange}
        name="user"
        value={user}
      />
    </>
  );
}
