import React from "react";
import "./Recommend.css";
import ReactStars from "react-rating-stars-component";
const Recommend = (props) => {
  const { page } = props;

  return (
    <div className="row mb-2">
      <div
        className={`${
          page === "search" ? "col-6" : "col-5"
        } col-lg-6 px-lg-0 text-end px-2 mb-2`}
      >
        <img
          src="https://image.tmdb.org/t/p/w500//uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg"
          alt="movie"
          className={`rounded_custom ${
            page === "search" ? "heigh__search" : "heigh__movie-detail"
          }`}
        />
      </div>
      <div
        className={`${
          page === "search" ? "col-6" : "col-7"
        } col-5 col-lg-6 text-white`}
      >
        <div>
          {"Movies Name asddddd ddda sdas dasdas dassad asdas".length > 10
            ? "Movies Name asddddd ddda sdas dasdas dassad asdas".slice(0, 30)
            : "Movies Name asddddd ddda sdas dasdas dassad asdas"}
        </div>
        <div className="text_custom text-secondary">genres asdasdas</div>
        <div className="text_custom text-secondary d-flex gap-2">
          <span>Rating</span>
          <div>
            <ReactStars count={5} value={4.5} isHalf={true} edit={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
