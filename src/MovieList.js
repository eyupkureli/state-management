import React, { useState, useContext } from "react";
import Movie from './Movie';
import { MoviesContext } from "./MovieContext";

const MovieList = () => {
   const [movies, setMovies] = useContext(MoviesContext);

  return (
    <div>
       {movies.map(movie => (
        <Movie name={movie.name} price = {movie.price} key={movie.id}/>
      ))}
    </div>
  );
};

export default MovieList;
