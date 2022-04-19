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
    {/* <div className=" container row mt-5">
      <div className="card text-white col-10 offset-2" style={{height:"500px"}}>
        <img src={imgPath + data.poster_path} className="card-img h-100" style={{width:"400px"}} alt={data.title} />
        <div className="card-img-overlay">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div> */}
    </>
  );
}
