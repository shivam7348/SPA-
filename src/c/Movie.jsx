import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Movie() {
  const [movieData, setMovieData] = useState(null); 

  useEffect(() => {
    axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=a3b722b1")
      .then((response) => {
        setMovieData(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []); 

  return (
    <>
       <nav>
         <div>
             <img src="" alt="Logo" />
         </div>

         <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>New Movie</li>
                <li>Contact Us</li>
            </ul>
         </div>
      </nav>
    
      {movieData ? (
        <div style={{ background: "grey", textAlign: "center", padding: "20px" }}>
          <h3>{movieData.Title}</h3>
          <p><strong>Year:</strong> {movieData.Year}</p>
          <p><strong>Director:</strong> {movieData.Director}</p>
          <p><strong>Genre:</strong> {movieData.Genre}</p>
          <p><strong>Plot:</strong> {movieData.Plot}</p>
          <img src={movieData.Poster} alt="Movie Poster" style={{ maxWidth: "200px" }} />
        </div>
      ) : (
        <p>Loading...</p> 
      )}


     
    </>
  );
}

export default Movie;
