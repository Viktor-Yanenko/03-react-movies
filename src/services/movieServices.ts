import axios from "axios";
import {type  Movie } from "../types/movie"; 

export default async function fetchMovies(query:string) {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`, {

    })
}