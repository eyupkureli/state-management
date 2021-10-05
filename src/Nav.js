import React, {useContext} from 'react';
import { MoviesContext } from './MovieContext';

const Nav = () => {
   const [movies, setMovies] = useContext(MoviesContext)
   return (
      <nav>
         <h3>Eyup Kureli List of Movies : {movies.length}</h3>
      </nav>
   )
}

export default Nav;
