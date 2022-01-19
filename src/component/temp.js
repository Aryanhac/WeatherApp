import React from 'react'
import './temp.css';

const Temp = () => {
    const [inputValue,setInputValue]=React.useState("pune");
    const [data,setData]=React.useState("");

    const  takeData= async ()=>{
      try {
          const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=54bf5ccb106d95c98863e88b5351604d`;
          const res= await fetch(url);
          const data=await res.json();
          console.log(data);
          const {temp,humidity,pressure}=data.main;
          const {main:weathermood}=data.weather[0];
          const {name}=data;
          const {speed}=data.wind;
          const {country,sunset}=data.sys;
          const newWeather={
            temp,humidity,pressure,weathermood,name,speed,country,sunset
          }
          setData(newWeather);
      } catch (error) {
          console.log(error);
      }
    }

    React.useEffect(() => {
       takeData();
    },[])
    return (
        <div>
            <div className="search-bar">
                <input type="search" placeholder='Enter CityName' autoFocus id="search" onChange={(e)=>{setInputValue(e.target.value)}} />
                <button id="search-btn" onClick={()=>{takeData()}}>Search</button>
            </div>
            <div className="container">
            <div className="weather-Container">
                <div className="box" id="weather-Symbol">
                    <i className={`wi wi-day-${data.weathermood}`}></i>
                </div>
                <div className="box" id="Temp">
                    <div className="Temp-box1">
                        <span id="Temp-temp">{data.temp}&deg;</span>
                        <span id="Temp-weather">{data.weathermood} <br /><p>{data.name},{data.country}</p> </span>
                    </div>
                    <div className="Temp-box2">
                        <span id="Temp-time">{new Date().toLocaleString()}</span>
                    </div>
                </div>
                <div className="box" id="weather-Information">
                    <div className="weather-Information-box" id="weather-Information-time"> <i className={"wi wi-day-sunny"}></i><span>{data.sunset}<br />sunset</span></div>
                    <div className="weather-Information-box" id="weather-Information-humidity"> <i className={"wi wi-humidity"}></i><span>{data.humidity} <br />humidity</span></div>
                    <div className="weather-Information-box" id="weather-Information-pressure"> <i className={"wi wi-hail"}></i><span>{data.pressure} <br />pressure</span></div>
                    <div className="weather-Information-box" id="weather-Information-wind"> <i className={"wi wi-day-windy"}></i><span>{data.speed} <br />wind</span></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Temp
