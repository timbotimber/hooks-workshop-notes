import React, { useState, useEffect } from "react";
import axios from "axios";

import Dinosaur from "./Dinosaur.js";
import { JurassicContext } from "./JurassicContext.js";

const Jurassic = () => {
  const [dinos, setDinos] = useState([]);

  const dinoData = async () => {
    let dinosaurArray = await axios.get(
      "http://dinoipsum.herokuapp.com/api/?format=json"
    );
    setDinos(dinosaurArray.data[0]);
  };

  useEffect(() => {
    dinoData();
  }, []);

  return (
    <>
      <JurassicContext.Provider value={{ dinos, setDinos }}>
        <h1>Dinosaurs:</h1>
        {dinos.map((dinosaur) => {
          return <Dinosaur data={dinosaur} />;
        })}
      </JurassicContext.Provider>
      ;
    </>
  );
};

export default Jurassic;
