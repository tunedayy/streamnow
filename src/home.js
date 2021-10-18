import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch, { backdropUrl } from "./datafetch";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const { data } = useFetch("/trending/all/week");

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="hero">
      <div className="section-center">
        {data.map((person, personIndex) => {
          const { id, title, overview, backdrop_path, media_type, name } =
            person;
          let trendingName;
          if (media_type === "tv") {
            trendingName = name;
          } else {
            trendingName = title;
          }
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === data.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <Link to={`/${media_type}/${id}`} key={id}>
              <article
                className={position}
                key={id}
                style={{
                  backgroundImage: `url(${backdropUrl}${backdrop_path})`,
                }}
              >
                <div className="hero-overlay">
                  <h1>{trendingName}</h1>
                  <p>{overview}</p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default Hero;
