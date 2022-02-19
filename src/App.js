import axios from 'axios';
import React from 'react';
import env from "react-dotenv";
import { Routes, Route} from 'react-router-dom';
import { Home } from './pages';

function App() {

  // const [city, setCity] = React.useState("");
  // const [weather, setWheather] = React.useState({});

  // const fetch = () => {
  //   axios.get(`${env.API_URL}${env.API_KEY}&q=London&aqi=no`).then((res) => {
  //     const location = res.data.location;
  //     const current = res.data.current;
  //     setWheather({
  //       city: location.name,
  //       country: location.country,
  //       lat: location.lat,
  //       lon: location.lon,
  //       localtime: location.localtime,
  //       last_updated: current.last_updated,
  //       temp_c: current.temp_c,
  //       temp_f: current.temp_f,
  //       condition: {
  //         text: current.condition.text,
  //         icon: current.condition.icon
  //       },
  //       humidity: current.humidity
  //     })
  //   })
  // }


  // console.log(weather);

  return (
    <Routes>
      <Route path="/" exact={true} element={<Home/>} />
    </Routes>
  );
}

export default App;
