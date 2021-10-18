import { useState, useEffect } from "react";

const API_ENDPOINT = `https://api.themoviedb.org/3`;
const API_KEY = `?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`;
export const posterUrl = "http://image.tmdb.org/t/p/w500/";
export const backdropUrl = "http://image.tmdb.org/t/p/original/";

const useFetch = (urlParams) => {
  const [data, getData] = useState([]);

  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        getData(data.results || data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}${API_KEY}&region=us`);
  }, [urlParams]);
  return { data };
};

export default useFetch;
