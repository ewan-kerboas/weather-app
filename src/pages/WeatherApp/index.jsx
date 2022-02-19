import React from 'react';
import { useParams } from 'react-router-dom';
import env from 'react-dotenv';
import axios from 'axios'
import { MapContainer, TileLayer } from 'react-leaflet';

export function WeatherApp() {

    const { id } = useParams();

    const [weather, setWheather] = React.useState({});
    const [period, setPeriod] = React.useState("");
    const [checked, setChecked] = React.useState(false);
    const [le, setLe] = React.useState("");

    React.useEffect(() => {
        axios.get(`${env.API_URL}${env.API_KEY}&q=${id}&aqi=no`).then((res) => {
            const location = res.data.location;
            const current = res.data.current;

            setLe(current.last_updated)

            setWheather({
                city: location.name,
                country: location.country,
                lat: location.lat,
                lon: location.lon,
                localtime: location.localtime,
                last_updated: current.last_updated,
                temp_c: current.temp_c,
                temp_f: current.temp_f,
                condition: {
                    text: current.condition.text,
                    icon: current.condition.icon
                },
                humidity: current.humidity,
                wind_kph: current.wind_kph,
                wind_degree: current.wind_degree,
                feelslike_c: current.feelslike_c,
                feelslike_f: current.feelslike_f,
                tz: location.tz_id,
                region: location.region
            })

            const d = new Date(location.localtime);
            const h = d.getHours();

            if(h >= 0 && h <= 6) return setPeriod("Night");
            if(h >= 6 && h <= 12) return setPeriod("Morning");
            if(h >= 12 && h <= 19) return setPeriod("Afternoon");
            if( h >= 19 && h <= 24) return setPeriod("Evening");
        })
    }, [])

    const handleChange = () => {
        setChecked(!checked);
    }

    if(!weather.condition) return <h1>Loading ...</h1>

    return(
        <>
            <section id="weather-app">
                <div className="shadow"></div>
                <div className="content">
                    <div className="card">
                        <div className="weather-main-info">
                            <h1>{weather.city}</h1>
                            <div className="wrapper">
                                <div className="left">
                                    <div className="icon">
                                        <img src={weather.condition.icon} alt={weather.condition.text} />
                                    </div>
                                    <div className="text">
                                        <h3>{weather.condition.text}</h3>
                                        <h4>{period}</h4>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="temp">
                                        {
                                            checked === false ?
                                            <div>
                                                <h2>{weather.temp_c}°c</h2>
                                                <h3>Feels like : {weather.feelslike_c}°c</h3>
                                            </div>
                                            :
                                            <div>
                                                <h2>{weather.temp_f}°f</h2>
                                                <h3>Feels like : {weather.feelslike_f}°f</h3>
                                            </div>
                                        }
                                        <label className="switch">
                                            <input type="checkbox" checked={checked} onChange={handleChange} />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="more-infos">
                            <div>
                                <h6>Wind</h6>
                                <p>{weather.wind_kph} km/h</p>
                            </div>
                            <div>
                                <h6>Humidity</h6>
                                <p>{weather.humidity}%</p>
                            </div>
                            <div>
                                <h6>Wind degrees</h6>
                                <p>{weather.wind_degree} °</p>
                            </div>
                        </div>
                        <div className="last-edit">
                            <p>Last update : {le}</p>
                        </div>
                        <div className="radar">
                            <MapContainer center={[weather.lat, weather.lon]} zoom={8} scrollWheelZoom={false}>
                                <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                            </MapContainer>
                        </div>
                        <div className="location-infos">
                            <h2>{weather.city}</h2>
                            <div className="list">
                                <ul>
                                    <li>Latitude : {weather.lat}</li>
                                    <li>Country : {weather.country}</li>
                                    <li>Region : {weather.region}</li>
                                </ul>
                                <ul>
                                    <li>Longitude : {weather.lon}</li>
                                    <li>Localtime : {weather.localtime}</li>
                                    <li>Timezone : {weather.tz}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}