import React from "react";
import { useEffect , useState , useContext} from "react";
import axiosInstance from '../network/axiosConfig'
import MovieCard from '../components/MovieCard'
import DataContext from "../context/data";


export default function HomePage(){

    const [movies , setMovies] = useState([]);
    const {favorites , setFavorites} = useContext(DataContext);
    console.log(favorites,setFavorites);
    useEffect(()=>{
        axiosInstance
        .get('/movie/popular')
        .then((res)=>{
            console.log(res.data.results);
            setMovies(res.data.results);
        })
        .catch((err)=>{console.error(err)})
    },[])

    return(
        <>
            <div className="container bg-transparent my-4 p-3">
                <MovieCard data={movies}/>
            </div>
        </>
    )

}