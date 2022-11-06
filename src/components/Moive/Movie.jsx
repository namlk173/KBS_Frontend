import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

import ReactStars from "react-rating-stars-component";

const Movie = () => {
  return (
    <div className="movie__container d-flex flex-column gap-3 cursor-pointer">
      <Link to={"/movie-detail/?id=1"}>
        <img
          src="https://image.tmdb.org/t/p/w500//uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg"
          alt="movie"
          className="poster__video rounded_custom"
        />
        <div className="d-flex flex-column px-2 pb-2">
          <span className="text-white fs-5">Movie name</span>
          <span className="text-secondary text_custom fs-6">Movie genres</span>
          <div className="text-secondary text_custom d-flex gap-1">
            <span className="rating__text">Rating:</span>
            <div className="align-self-center">
              <ReactStars
                count={5}
                value={4.5}
                isHalf={true}
                size={20}
                activeColor="#ffd700"
                edit={false}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
