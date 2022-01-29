import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './Pages/Homepage';
import {
  Route,
  Routes
} from "react-router-dom";
import { Movies } from './Pages/Movies';
import { Series } from './Pages/Series';
import { Contact } from './Pages/Contact';
import axios from 'axios';




function App() {
  const BASE_URL = "https://api.themoviedb.org/3";
  const api = axios.create({ baseURL: BASE_URL });
  const api_key = "261e2dc7cdfec6c3294f3d710f103ae5";
  const getUpcoming = api.get("movie/upcoming", {
    params: { api_key }
  });
  const [data, setData] = useState([]);


  useEffect(()=>{
    getUpcoming.then(response => {
      setData(response.data.results);
    });
    console.log(data)
  },[])
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/series" element={<Series />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
