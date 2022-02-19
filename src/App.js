import axios from 'axios';
import React from 'react';
import env from "react-dotenv";
import { Routes, Route} from 'react-router-dom';
import { Home, WeatherApp } from './pages';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home/>} />
      <Route path="/city=:id" exact={true} element={<WeatherApp/>} />
    </Routes>
  );
}

export default App;
