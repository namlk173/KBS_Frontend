import React, { useState } from "react";
import "./RatingMovie.css";
import ReactStars from "react-rating-stars-component";

const RatingMovie = () => {
  const [rating, setRating] = useState(0);
  console.log(rating);

  return (
    <div className="d-flex flex-column gap-3 cursor-pointer movie__rating__container">
      <img
        src="https://image.tmdb.org/t/p/w500//uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg"
        alt="movie"
        className="poster__rating"
      />
      <div className="d-flex flex-column pb-2">
        <span className="text-white fs-4 text_custom">Movie name</span>
        <span className="text-secondary text_custom fs-6">Movie genres</span>
        <div className="text_custom py-2 mt-2 px-3 rating__aria__container">
          <div className="">
            <ReactStars
              count={5}
              value={rating}
              isHalf={true}
              size={40}
              onChange={(newRating) => setRating(newRating)}
              activeColor="#ffd700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingMovie;
