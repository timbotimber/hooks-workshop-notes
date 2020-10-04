import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const SubChildComponent = (props) => {
  const { details, setDetails } = useContext(UserContext);
  const { name, location } = details;

  const handleChange = () => {
    setDetails({
      name: "Jeffy",
      location: "Berlin",
    });
  };

  return (
    <div>
      <h2>
        my name's {name} and I live in {location}
      </h2>
      <button onClick={() => handleChange()}> change value</button>
    </div>
  );
};

export default SubChildComponent;
