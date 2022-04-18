import React from "react";
import { useState , useContext} from "react";
import DataContext from "../context/data";

export default function Favorites(){
    const {favorites , setFavorites} = useContext(DataContext);
    console.log(favorites)
    return(
        <>
        </>
    )
}