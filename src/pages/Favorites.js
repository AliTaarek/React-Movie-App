import React from "react";
import { useState , useContext ,useEffect} from "react";
import DataContext from "../context/data";


export default function Favorites(){
    const {favorites , setFavorites} = useContext(DataContext);
    const [moviesArray , setMoviesArray] = useState([])
    console.log(favorites)
    const imgPath = "https://image.tmdb.org/t/p/w500";

    useEffect(()=>{
        setMoviesArray(favorites)
        
    },[favorites])
    return(
        <>
            <div className="fs-1 fw-bold text-center mt-5" style={{minHeight:"58.4vh",position:"relative"}}>Welcome to your favorite list</div>
            {/* {moviesArray.map((movie)=>{
               
            <div className="movieCard" style={{backgroundImage: `url(${imgPath + movie.poster_path})`}}>
                <div className="movieDetails">
                    <div className="movieHeader p-2">
                        <img id="movieImg" src={imgPath + movie.poster_path} alt={movie.title} />
                        <h1 id="movie_title">{movie.title}</h1> 
                        <span className="movie_time">{movie.runtime} minute</span>
                        <span className="movie_time">{movie.release_date}</span>
                        <span className="movie_time">{movie.vote_average}/10 <i className="fa-solid fa-star" style={{color:"orange"}}></i></span>
                    </div>
                    <div className="movieDesc fs-5">
                        {movie.overview}
                    </div>
                </div>
            </div>
            })} */}
        </>
    )
}