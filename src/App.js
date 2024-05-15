import React from "react";
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Rowpost/>
    </div>
  );
}

export default App;
