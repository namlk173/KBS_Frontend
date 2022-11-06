import React from "react";
import "./MovieDetail.css";
import { useSearchParams } from "react-router-dom";
import { Navbar, RatingMovie, ListRecommend } from "../../components";

const MovieDetail = () => {
  const [params] = useSearchParams();
  // console.log(params.get("id"));

  return (
    <div>
      <Navbar />
      <div className="container-fluid bg__custom">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-lg-8 d-flex justify-content-center">
              <RatingMovie/>
            </div>
            <div className="col-12 col-lg-4 d-flex flex-column justify-content-start mt-3 mt-lg-0">
              <div className="row mb-2 gap-2 px-2 px-lg-0">
                <button className="py-1 button__getRecommend text-white text_custom">Relative Video</button>
                <button className="py-1 button__getRecommend text-white text_custom">Get Recommend</button>
              </div>
              <ListRecommend page={"movie_detail"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
