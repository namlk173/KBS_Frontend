import React, { useState } from "react";
import "./Search.css";
import { ListRecommend, Navbar } from "../../components";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [params] = useSearchParams();
  // console.log(params.get("query"));
  return (
    <div>
      <Navbar />
      <div className="container-fluid bg__custom">
        <div className="container py-5">
          <ListRecommend page={"search"} />
        </div>
      </div>
    </div>
  );
};

export default Search;
