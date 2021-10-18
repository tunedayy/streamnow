import React from "react";
import { Link } from "react-router-dom";
import { posterUrl } from "./datafetch";
import { useParams } from "react-router";

const Movie = ({ id, overview, poster_path }) => {
  const { media_type } = useParams();
  //   let type;
  //   if (media_type === "tv") {
  //     type = "tv";
  //   } else {
  //     type = "movie";
  //   }
  return (
    <Link to={`/${media_type || "movie"}/${id}`} key={id}>
      <article
        className="skeleton"
        style={{ backgroundImage: `url(${posterUrl}${poster_path})` }}
      >
        <div className="text-overlay">
          {" "}
          <p>{`${overview.substring(0, 220)}...`}</p>
        </div>
      </article>
    </Link>
  );
};

export default Movie;
