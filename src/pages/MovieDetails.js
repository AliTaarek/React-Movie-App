import React , { useContext, useEffect, useState }  from 'react';
import MovieInfo from '../components/MovieInfo'
import { useParams } from "react-router-dom";
import axiosInstance from "../network/axiosConfig";

export default function MovieDetails(){
    const params = useParams()
    console.log(params)
    const [movieDetails , setMovieDetails] = useState([]);
    
    useEffect(()=>{
        axiosInstance
        .get(`/movie/${params.id}`)
        .then((res)=>{
            console.log(res);
            setMovieDetails(res.data);
        })
        .catch((err)=>{console.error(err)})
    },[])
    return(
        <>
            <MovieInfo data={movieDetails}/>
        </>
    )
}