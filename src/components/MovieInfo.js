import React from "react";
import './MovieInfo.css'
export default function MovieInfo({ data }) {
    const imgPath = "https://image.tmdb.org/t/p/w500";
  return (
    <>
    <div className="movieCard" style={{backgroundImage: `url(${imgPath + data.poster_path})`}}>
        <div className="movieDetails">
            <div className="movieHeader p-2">
                <img id="movieImg" src={imgPath + data.poster_path} alt={data.title} />
                <h1 id="movie_title">{data.title}</h1> 
                <span className="movie_time">{data.runtime} minute</span>
                <span className="movie_time">{data.release_date}</span>
                <span className="movie_time">{data.vote_average}/10 <i className="fa-solid fa-star" style={{color:"orange"}}></i></span>
            </div>
            <div className="movieDesc fs-5">
                {data.overview}
            </div>
        </div>
    </div>
    </>
  );
}
