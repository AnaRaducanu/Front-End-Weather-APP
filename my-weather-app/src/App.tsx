import React, { useEffect, useState } from "react";
import HelloWorld from "./components/HelloWorld";

function App() {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await fetch("http://localhost:3001/api");
    const data = await response.json();
    setData(data.message);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <HelloWorld />
      <p>{!data ? "Loading..." : JSON.stringify(data)}</p>
    </>
  );
}

export default App;
