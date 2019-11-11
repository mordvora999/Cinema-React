import React, { useState, useEffect } from "react";
import axois from 'axios';

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=b3f6f90a";

export const UseMovie = () => {
const [movies, setMovies] = useState([]);
const [errorMessage, setErrorMessage] = useState(null);

useEffect(() => {
    axois.get(MOVIE_API_URL)
      .then(data => data.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        
      });
  }, [this.props.id]);


}