import React from "react";
import "./Home.css";
import { Navbar, ListMovie } from "../../components";
const home = () => {
  return (
    <div>
      <Navbar />
      <ListMovie />
    </div>
  );
};

export default home;
