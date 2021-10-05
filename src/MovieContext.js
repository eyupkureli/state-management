import React, { useState, createContext } from "react";

export const MoviesContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "£10",
      id: 23124,
    },
    {
      name: "Game of Thrones",
      price: "£10",
      id: 2566124,
    },
    {
      name: "Inception",
      price: "£10",
      id: 23524,
    },
  ]);
  return (
  <MoviesContext.Provider value = {[movies, setMovies]}>
     {props.children}
  </MoviesContext.Provider>
);
};


//props.children shows <Nav/> and <MovieList/> we took them from App.js