import React from "react";
import { useEffect , useState } from "react";
import axiosInstance from '../network/axiosConfig'
import MovieCard from '../components/MovieCard'



export default function HomePage(){

    const [movies , setMovies] = useState([]);
    const [page , setPage] = useState(1)

    useEffect(()=>{
        axiosInstance
        .get('/movie/popular',
            {params:{
                page:page
                }
            }
        )
        .then((res)=>{
            setMovies(res.data.results);
        })
        .catch((err)=>{console.error(err)})
    },[page])

    const nextPage = ()=>{
        let newPage = page+1
        setPage(newPage)
    }

    const previousPage = ()=>{
        if(page > 1){
            let newPage = page-1
            setPage(newPage)
        }
    }

    return(
        <>
            <div className="container bg-transparent my-4 p-3 ">
                <MovieCard data={movies}/>
                <div className="container mt-5 d-flex justify-content-evenly">
                    <button className="btn btn-danger px-3 fs-4 text-white" onClick={()=>previousPage()}>previous</button>
                    <button className="btn btn-danger px-3 mx-5 fs-4 text-white" onClick={()=>nextPage()}>Next</button>
                </div>
            </div>
        </>
    )

}