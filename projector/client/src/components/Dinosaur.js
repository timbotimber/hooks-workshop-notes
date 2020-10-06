import React, { useContext } from "react";
import { JurassicContext } from "./JurassicContext.js";

const Dinosaur = ({ data }) => {
  const { dinos, setDinos } = useContext(JurassicContext);

  const handleChange = () => {
    setDinos(["Ian Malcom"]);
  };

  return (
    <div>
      <h2>{data}</h2>
      <button onClick={() => handleChange()}> change value</button>
    </div>
  );
};

export default Dinosaur;
