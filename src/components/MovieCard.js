import React , {useContext , useState} from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/data";
import './MovieCard.css'

export default function MovieCard({ data }) {
  const imgPath = "https://image.tmdb.org/t/p/w500";
  console.log(data);
  const {favorites , setFavorites} = useContext(DataContext);

  const addToFavorites = (movie)=>{
      let copy = [...favorites]
      copy.push(movie);
      setFavorites(copy);
      console.log(favorites);
  }
  return (    
    <>
      <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {data.map((movie) => 
          <div key={movie.id} className="col hp" id="movieCard">
            <div className="card h-100 shadow">
              <img
                src={imgPath + movie.poster_path}
                className="card-img-top h-75 m-auto mt-3"
                alt={movie.title}
                style={{width:"75%",height:"75%"}}
              />
       
              <div className="card-body mt-3 d-flex justify-content-between align-items-center">
                <div className="float-start bg-warning badge rounded-pill  fs-6 text-black">{movie.vote_average} /10 <i className="fa-solid fa-star" style={{color:"yellow"}}></i></div>
                <a className="float-end text-muted aff-link text-uppercase" href="#">reviews</a>
                {/* <p className="card-text">{movie.overview}</p> */}
              </div>
              <h5 className="card-title align-self-center fw-bolder p-3 fs-6">{movie.title}</h5>
              <div className="card-footer d-flex justify-content-between">
                <Link className="btn btn-primary my-2 p-2" to={`/movie/${movie.id}`}>Movie Details</Link>
                <button className="btn btn-success my-2 p-2" onClick={()=>addToFavorites(movie)}>Add To Favorites</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
