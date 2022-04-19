import React from "react";
import { useState, useContext, useEffect } from "react";
import DataContext from "../context/data";

export default function Favorites() {
  const { favorites, setFavorites } = useContext(DataContext);
  const [moviesArray, setMoviesArray] = useState([]);

  const imgPath = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    setMoviesArray(favorites);
  }, [favorites]);

  const removeFromList = (movie)=>{
      let removedMovieIndex = favorites.indexOf(movie) 
      let copy = [...favorites]
      copy.splice(removedMovieIndex,1)
      setFavorites(copy);
    }
      
  return (
    <>
      <div
        className="fs-1 fw-bold text-center mt-5"
      >
        Welcome to your favorite list
      </div>
      <div style={{ minHeight: "50vh", position: "relative" }}>
      {moviesArray.map((movie) => {
        return (
          <div
            key={movie.id}
            className="movieCard"
            style={{ backgroundImage: `url(${imgPath + movie.poster_path})` }}
          >
            <div className="movieDetails">
              <div className="movieHeader p-2">
                <img
                  id="movieImg"
                  src={imgPath + movie.poster_path}
                  alt={movie.title}
                />
                <h1 id="movie_title">{movie.title}</h1>
                <span className="movie_time">{movie.runtime} minute</span>
                <span className="movie_time">{movie.release_date}</span>
                <span className="movie_time">
                  {movie.vote_average}/10{" "}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "orange" }}
                  ></i>
                </span>
              </div>
              <div className="movieDesc fs-5">{movie.overview}</div>
              <button className="btn btn-danger fs-5 mx-4" style={{ position: "absolute",bottom:"25px"}} onClick={()=>removeFromList(movie)}>Remove From List</button>
            </div>
            
          </div>
        );
      })}
      </div>
    </>
  );
}
