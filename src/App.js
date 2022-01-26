import './App.css';
import Header from './components/Header/Header';
import Homepage from './Pages/Homepage';
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/movies" element="Movies"></Route>
      </Routes>
    </div>
  );
}

export default App;
