import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Similar } from "./movies";
import useFetch from "./datafetch";
import { posterUrl, backdropUrl } from "./datafetch";
import { FiChevronLeft } from "react-icons/fi";

const Single = () => {
  const { id } = useParams();
  const { media_type } = useParams();
  const { data } = useFetch(`/${media_type}/${id}`);

  const { title, overview, poster_path, backdrop_path, release_date, name } =
    data;
  let trendingName;
  if (media_type === "tv") {
    trendingName = name;
  } else {
    trendingName = title;
  }

  const Cast = () => {
    const { data } = useFetch(`/${media_type}/${id}/credits`);
    const casting = data.cast;
    if (casting) {
      const castList = casting.slice(0, 15);
      return (
        <article>
          <span>
            <strong>Starring: </strong>
          </span>
          {castList.map((cast) => {
            const { name, cast_id } = cast;
            return <span key={cast_id}>{name}, </span>;
          })}
          ...
        </article>
      );
    } else return <div>Loading...</div>;
  };
  return (
    <div>
      <section
        className="single-hero"
        style={{ backgroundImage: `url(${backdropUrl}${backdrop_path})` }}
      >
        <div className="hero-overlay">
          <Link to={`/`}>
            <h2>
              <FiChevronLeft /> Back to home
            </h2>
          </Link>
          <div className="single-info">
            <div className="poster">
              <img src={`${posterUrl}${poster_path}`} alt={title} />
            </div>
            <div>
              <h1>{trendingName}</h1>
              <span>Release date: {release_date}</span>
              <p>{overview}</p>
              <Cast />
            </div>
          </div>
        </div>
      </section>
      <Similar />
    </div>
  );
};

export default Single;
