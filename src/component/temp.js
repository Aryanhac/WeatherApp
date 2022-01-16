import React from 'react'
import './temp.css';

const Temp = () => {
    return (
        <div>
            <div className="search-bar">
                <input type="search" placeholder='Enter CityName' autoFocus id="search" />
                <button id="search-btn">Search</button>
            </div>
            <div className="container">
            <div className="weather-Container">
                <div className="box" id="weather-Symbol">
                    <i className={"wi wi-day-sunny"}></i>
                </div>
                <div className="box" id="Temp">
                    <div className="Temp-box1">
                        <span id="Temp-temp"></span>
                        <span id="Temp-weather"></span>
                    </div>
                    <div className="Temp-box2">
                        <span id="Temp-time"></span>
                    </div>
                </div>
                <div className="box" id="weather-Information">container3</div>
            </div>
            </div>
        </div>
    )
}

export default Temp
