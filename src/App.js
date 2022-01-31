import React, { useState, useEffect } from 'react';
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
import Requests from './requests';




function App() {

  const [data, setData] = useState([]);



  useEffect(() => {
    const fetchTrending = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/${Requests.fetchTrending}`)
      // setData(data)
      console.log(res.data.results)
    }
    fetchTrending();
  }, [])

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
