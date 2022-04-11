import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

//77218e99 api-key


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=77218e99'

const App = () => {

    const [movies, setMovies] = useState([]);

    const [searchterm, setsearchterm] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json()
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');

    }, [])
    return (
       <div className='app'>
           <h1>Akeem's Movies</h1>
           <div className='search'>
               <input 
                    placeholder='Search for movies'
                    value = {searchterm}
                    onChange={(e)=> setsearchterm(e.target.value)}
               />
               <img 
                    src={SearchIcon}
                    alt='search'
                    onClick ={()=> searchMovies(searchterm)}
                />
           </div>

           {
            movies?.length > 0 
            ? (
                <div className='Container'>
                {movies.map((movie) => <MovieCard movie = {movie}/> )}
                </div>
            ) : 
            (
                   <div className='empty'>
                       <h2>No movies found </h2>
                   </div>
            )}
       </div>
    );
}

export default App;