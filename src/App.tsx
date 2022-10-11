import React, { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  return <div>Hello {name}</div>;
}

export default App
