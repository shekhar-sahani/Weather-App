import React, { useEffect, useState } from "react";
import "../Tempapp/TempApp.css"

export default function TempApp() {
    const [search, setSearch] = useState("patna")
    const [city, setCity] = useState()
    const [wind, setWind] = useState()


    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=183adc85d2c043d5908d390907545084`
            const response = await fetch(url)
            const responseJson = await response.json()
            // console.log("url", url)
            console.log("res", responseJson)
            setWind(responseJson.wind)
            setCity(responseJson.main)
        }
        fetchApi()
    }, [search])




  return (
    <div>
       <div className="weather-container_1">
        <div className="weather-side">
          <div className="weather-gradient" />
          <div className="date-container">

            <h2 className="date-dayname">Sunday </h2><span className="date-day"> 16 Jan 2022 </span><i className="location-icon" data-feather="map-pin" /><span className="location">{search}</span>
          </div>
          <div className="weather-container"><i className="weather-icon" data-feather="sun" />
            <h1 className="weather-temp">{city && city.temp}°C</h1>
            <h3 className="weather-desc">Sunny</h3>
          </div>
        </div>
        <div className="info-side">
          <div className="today-info-container">
            <div className="today-info">
              <div className="precipitation"> <span className="title">Pressure</span><span className="value">{city && city.pressure} %</span>
                <div className="clear" />
              </div>
              <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{city && city.humidity} %</span>
                <div className="clear" />
              </div>
              <div className="wind"> <span className="title">WIND</span><span className="value">{wind && wind.speed} km/h</span>
                <div className="clear" />
              </div>
            </div>
          </div>
          <div className="week-container">
            <ul className="week-list">
              <li className="active"><i className="day-icon" data-feather="sun" /><span className="day-name">Tue</span><span className="day-temp">{city && city.temp} </span></li>
              <li><i className="day-icon" data-feather="cloud" /><span className="day-name">Wed</span><span className="day-temp">21°C</span></li>
              <li><i className="day-icon" data-feather="cloud-snow" /><span className="day-name">Thu</span><span className="day-temp">08°C</span></li>
              <li><i className="day-icon" data-feather="cloud-rain" /><span className="day-name">Fry</span><span className="day-temp">19°C</span></li>
              <div className="clear" />
            </ul>
          </div>
          <div className="location-container">
            <input value={search} onChange={(event) => setSearch(event.target.value)} type="search" className="location-button" />
          </div>
        </div>
      </div>
    </div>
  );
}
