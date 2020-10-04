// src/components/Project.js

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProjectList from "./ProjectList";
import AddProject from "./AddProject";
import Child from "./Child.js";
import { UserContext } from "./UserContext";

const Projects = () => {
  const [details, setDetails] = useState({
    name: "timmy",
    location: "South Park",
  });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  // componentDidUpdate() {
  //   console.log('update');
  //   // this.getData();
  // }

  const getData = async () => {
    let response = await axios.get("api/projects");
    console.log(response);
    setProjects(response.data);
  };

  // <AddProject getData={this.getData} />

  return (
    <div className="projects-container">
      <h1>Hello Patients</h1>
      <UserContext.Provider value={{ details, setDetails }}>
        <Child userDetails={details} />
      </UserContext.Provider>
      <ProjectList projects={projects} />
      <AddProject getData={getData} />
    </div>
  );
};

export default Projects;
