import React, { useContext } from "react";
import SubChildComponent from "./SubChildComponent";
import { UserContext } from "./UserContext";

const Child = ({ userDetails }) => {
  const msg = useContext(UserContext);
  console.log("child msg", msg);
  return (
    <div>
      <h1>This is the child component</h1>
      <SubChildComponent />
    </div>
  );
};

export default Child;
