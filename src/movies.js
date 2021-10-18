import React from "react";
import Movie from "./movie";
import { useParams } from "react-router";
import useFetch from "./datafetch";

export const Popular = () => {
  const { data } = useFetch(`/movie/popular`);
  return (
    <section className="list-section">
      <div className="section-heading">
        <h1>Most Popular</h1>
      </div>
      <div className="movie-list">
        {data.map((data) => {
          return <Movie key={data.id} {...data}></Movie>;
        })}
      </div>
    </section>
  );
};

export const Upcoming = () => {
  const { data } = useFetch("/movie/upcoming");

  return (
    <section className="list-section">
      <div className="section-heading">
        <h1>Coming Soon</h1>
      </div>
      <div className="movie-list">
        {data.map((movie) => {
          return <Movie key={movie.id} {...movie}></Movie>;
        })}
      </div>
    </section>
  );
};

export const Similar = () => {
  const { id } = useParams();
  const { media_type } = useParams();
  const { data } = useFetch(`/${media_type}/${id}/similar`);
  return (
    <section className="list-section">
      <div className="section-heading">
        <h1>Similar Movies</h1>
      </div>
      <div className="movie-list">
        {data.map((movie) => {
          return <Movie key={movie.id} {...movie}></Movie>;
        })}
      </div>
    </section>
  );
};

export const Discover = () => {
  const { data } = useFetch(`/discover/movie`);
  return (
    <section className="list-section">
      <div className="section-heading"></div>
      <div className="movie-list discover">
        {data.map((data) => {
          return <Movie key={data.id} {...data}></Movie>;
        })}
      </div>
    </section>
  );
};
