import React from "react";
import "./ListRecommend.css";
import { Recommend } from "../../components";

const ListRecommend = (props) => {
  const {page} = props
  return (
    <div className="w-100">
        <Recommend page={page}/>
        <Recommend page={page} />
        <Recommend page={page} />
        <Recommend page={page} />
        <Recommend page={page} />
        <Recommend page={page} />
        <Recommend page={page} />
        <Recommend page={page} />
    </div>
  );
};

export default ListRecommend;
