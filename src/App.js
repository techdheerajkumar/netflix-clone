import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";
import { Movies } from "./Pages/Movies";
import { Series } from "./Pages/Series";
import { Contact } from "./Pages/Contact";
import axios from "axios";
import Requests from "./requests";

function App() {
  const [trending, setTrending] = useState([]);

  const [originals, setOriginals] = useState([]);

  const [movies, setMovies] = useState([]);


  useEffect(() => {
    const fetchTrending = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/${Requests.fetchTrending}`
      );
      setTrending(res.data.results);
    };
    fetchTrending();
  }, []);

  
  useEffect(() => {
    const netflixOriginals = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${Requests.fetchNetflixOriginals}`
      );
      setOriginals(response.data.results);
      
    };
    netflixOriginals();
  }, []);


  useEffect(()=>{
    const netflixMovies = async ()=>{
      const response = await axios.get(
        `https://api.themoviedb.org/3/${Requests.fetchActionMovies}`
      )
      setMovies(response.data.results)
    }

    netflixMovies();
  },[])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Homepage data={trending} originalsData={originals} movieData =  {movies}/>}
        ></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/series" element={<Series />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
