import React, { useState, useRef } from 'react'
import './Weather.css'
import searchIcon from '../assets/search.png'
import clearIcon from '../assets/clear.png'
import cloudIcon from '../assets/cloud.png'
import drizzleIcon from '../assets/drizzle.png'
import humidityIcon from '../assets/humidity.png'
import rainIcon from '../assets/rain.png'
import snowIcon from '../assets/snow.png'
import windIcon from '../assets/wind.png'

export const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const inputRef = useRef();

    const weatherIcons = {
        "01d": clearIcon,
        "01n": clearIcon,
        "02d": cloudIcon,
        "02n": cloudIcon,
        "03d": cloudIcon,
        "03n": cloudIcon,
        "04d": cloudIcon,
        "04n": cloudIcon,
        "09d": drizzleIcon,
        "09n": drizzleIcon,
        "10d": rainIcon,
        "10n": rainIcon,
        "11d": rainIcon,
        "11n": rainIcon,
        "13d": snowIcon,
        "13n": snowIcon,
        "50d": cloudIcon,
        "50n": cloudIcon,
    }

    const fetchWeatherData = async (city) => {
        if (city === "") {
            alert("Please enter a city name");
            setWeatherData(null);
            return;
        }

        try {
            const apiKey = import.meta.env.VITE_API_KEY;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            const res = await fetch(url);
            const data = await res.json();
            if (!res.ok) {
                alert(data.message);
                setWeatherData(null);
                return;
            }
            const icon = weatherIcons[data.weather[0].icon] || clearIcon;
            setWeatherData({
                temp: data.main.temp,
                city: data.name,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                icon: icon
            });
        } catch (err) {
            setWeatherData(false);
            alert("Error in fetching data.");
        }
    }

    return (
        <div className='container'>
            <div className="search-bar">
                <input type="text" placeholder='Enter city name' ref={inputRef} />
                <button onClick={() => { fetchWeatherData(inputRef.current.value); inputRef.current.value = "" }}>
                    <img src={searchIcon} alt="search-icon" />
                </button>
            </div>
            {weatherData &&
                <>
                    <img className='weather-icon' src={weatherData.icon} alt="weather-icon" />
                    <p className='text'>{Math.round(weatherData.temp)}° C</p>
                    <p className='text location'>{weatherData.city}</p>
                    <div className='weather-details'>
                        <div className="col">
                            <img src={humidityIcon} alt="humidity-icon" />
                            <div>
                                <p className='p-tag'>{weatherData.humidity} %</p>
                                <p className='s-tag'>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src={windIcon} alt="wind-icon" />
                            <div>
                                <p className='p-tag'>{Math.round(weatherData.windSpeed)} m/s</p>
                                <p className='s-tag'>Wind speed</p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}